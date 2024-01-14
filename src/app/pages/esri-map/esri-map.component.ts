/*
  Copyright 2019 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";

import esri = __esri; // Esri TypeScript Types

import { Observable, Subscription } from "rxjs";
import { FirebaseService, ITestItem } from "src/app/services/database/firebase";

import Config from "@arcgis/core/config";
import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import { AuthenticationService } from "src/app/services/database/authentication.service";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Query from "@arcgis/core/rest/support/Query";
import "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { DataService } from "src/app/services/database/data.service";
import { IMatch } from "src/app/models/match";
import { IStadium } from "src/app/models/stadium";
import Locate from '@arcgis/core/widgets/Locate';
import Track from '@arcgis/core/widgets/Track';
import {addressToLocations} from '@arcgis/core/rest/locator';
import Search from '@arcgis/core/widgets/Search';
import { SimpleMarkerSymbol } from '@arcgis/core/symbols';
import { User } from 'firebase/auth';

@Component({
  selector: "app-esri-map",
  templateUrl: "./esri-map.component.html",
  styleUrls: ["./esri-map.component.scss"],
  providers: [DataService],
})
export class EsriMapComponent implements OnInit, OnDestroy {
  // The <div> where we will place the map
  @ViewChild("mapViewNode", { static: true }) private mapViewEl: ElementRef;

  // Instances
  map: esri.Map;
  view: esri.MapView;
  pointGraphic: esri.Graphic;
  graphicsLayer: esri.GraphicsLayer;
  searchWidget: esri.widgetsSearch;


  //user
  user: User | null = null;


  // Attributes
  zoom = 2;
  center: Array<number> = [-98.5795, 45.8283];
  basemap = "streets-navigation-vector";
  loaded = false;
  pointCoords: number[] = [-98.5795, 45.8283];
  dir: number = 0;
  count: number = 0;
  timeoutHandler = null;
  userEmail: string = "";

  // firebase sync
  isConnected: boolean = false;
  subscriptionList: Subscription;
  subscriptionObj: Subscription;

  matches$: Observable<any>;
  stadiums$: Observable<any>;

  selectedStadium: IStadium;
  selectedMatchId: number = -1;
  ticketBooked: boolean = false;

  constructor(
    private fbs: FirebaseService,
    private authService: AuthenticationService,
    private firestoreService: DataService,
    private afAuth: AngularFireAuth
  ) {
    this.matches$ = firestoreService.getAllMatches();
    this.stadiums$ = firestoreService.getAllStadiums();
  }

  initializeSearch() {
    const searchWidgetProperties = {
      view: this.view,
      popupEnabled: false,
    };
  
    this.searchWidget = new Search(searchWidgetProperties);
  
    this.searchWidget.on('select-result', (event) => {
      const selectedResult = event.result;
      this.view.goTo({
        target: selectedResult.extent,
        zoom: 10,
      });
    });
  
    this.searchWidget.on('search-clear', () => {
      this.view.goTo({
        center: this.center,
        zoom: this.zoom,
      });
    });
  
    this.view.ui.add(this.searchWidget, {
      position: 'top-right',
    });
  }
  

  async initializeMap() {
    try {
      // Configure the Map
      const mapProperties: esri.WebMapProperties = {
        basemap: this.basemap,
      };

      Config.apiKey =
        "AAPK619bcbe1049045bbb6da1081e59967fczZuISsqzAJ2uJvhaa7AH8zz2N7mlE4HSyicdWutpdrf-tkdhtUCGEc4WBYKUDdou";

      this.map = new WebMap(mapProperties);

      this.addFeatureLayers();
      this.addGraphicLayers();

      this.addPoint(this.pointCoords[1], this.pointCoords[0], true);

      // Initialize the MapView
      const mapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: this.center,
        zoom: this.zoom,
        map: this.map,
      };

      this.view = new MapView(mapViewProperties);

      // Fires `pointer-move` event when user clicks on "Shift"
      // key and moves the pointer on the view.
      this.view.on("pointer-move", ["Shift"], (event) => {
        let point = this.view.toMap({ x: event.x, y: event.y });
        console.log("map moved: ", point.longitude, point.latitude);
      });

      await this.view.when(); // wait for map to load
      console.log("ArcGIS map loaded");
      console.log(
        "Map center: " +
          this.view.center.latitude +
          ", " +
          this.view.center.longitude
      );
      this.initializeSearch();
      return this.view;
    } catch (error) {
      console.log("EsriLoader: ", error);
    }
  }

  bookTicket() {
    let res = this.firestoreService.bookTicket(this.selectedMatchId, this.userEmail);
    this.ticketBooked = true;
    sleep(3000);
    this.ticketBooked = false;
  }


  handleMatchSelect(match_id: string) {

    if(parseInt(match_id) == -1) {
      this.view.goTo({center: this.center, zoom: this.zoom})
      return;
    }


    this.stadiums$.forEach((stadiums: IStadium[]) => {
      for (let stadium of stadiums) {
        if (stadium.next_matches.includes(parseInt(match_id))) {
          this.view.goTo({
            center: new Point({
              longitude: stadium.longitude,
              latitude: stadium.latitude,
            }),
            zoom: 5,
          });
        }
      }
    });

    this.stadiums$.forEach((stadiums) => {
      let matchingStadium = null;
      for (const stadium of stadiums) {
        if (
          stadium.next_matches &&
          stadium.next_matches.includes(parseInt(match_id))
        ) {
          matchingStadium = stadium;
          break;
        }
      }

      if (matchingStadium) {
        this.selectedStadium = matchingStadium; // Adjust property based on your actual stadium object
      } else {
        this.selectedStadium = null;
      }
    });
  }

  addGraphicLayers() {
    this.graphicsLayer = new GraphicsLayer();
    this.map.add(this.graphicsLayer, 0);
  }

  addFeatureLayers() {
    const graphicsLayer = new GraphicsLayer();
    this.map.add(graphicsLayer, 4);

    function mapRange(value: number, fromMin: number, fromMax: number): number {
      return ((value - fromMin) * 255) / (fromMax - fromMin);
    }

    this.stadiums$.forEach((stadiums: IStadium[]) => {
      for (const stadium of stadiums) {
        this.matches$.forEach((matches: IMatch[]) => {
          let cnt = 0;
          for (const match of matches) {
            if (stadium.next_matches.includes(match.match_id)) {
              cnt++;
              let lon = stadium.longitude;
              let lat = stadium.latitude;

              const point = {
                //Create a point
                type: "point",
                longitude: lon,
                latitude: lat,
              };

              let r = 0;
              let g = 0;
              let b = 0;

              // r = mapRange(stadium.capacity - match.available_tickets , 0, stadium.capacity)
              if (match.available_tickets / stadium.capacity > 0.75) {
                r = 0;
              } else {
                r = 255;
              }

              g = mapRange(match.available_tickets, 0, stadium.capacity);

              const simpleMarkerSymbol = {
                type: "simple-marker",
                color: [r, g, b, 1], // Orange
                size: "15px",
                outline: {
                  color: [0, 0, 0, 0.5], // White
                  width: 1,
                },
                style: "circle",
                yoffset: `${cnt * 15} px`,
              };
              const popupTemplate = {
                title: "{round}: {home_team} - {away_team}",
                content: `<div><a href='' onclick='alert('@TODO BOOK TICKET')' style='cursor:pointer;display:inline-block;padding:10px 20px;margin:5px;color:#fff;background-color:#0079c1;text-decoration:none;border-radius:5px;'>Book a ticket</a></div>`  ,
                
              };
              const attributes = {
                ...match,
              };

              const pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol,
                popupTemplate: popupTemplate,
                attributes: attributes,
              } as any);
              graphicsLayer.add(pointGraphic);
            }
          }
          console.log("==========");
        });
      }
    });

    const stadiumsLayer = new FeatureLayer({
      portalItem: {
        id: "6a1b7f8182944170b50e8f764d15c1df",
      },
    });

    this.map.add(stadiumsLayer, 0);

    const matchesLayer = new FeatureLayer({
      portalItem: {
        id: "fd18eeb1f92848d0a794894ebcefa0e4",
      },
    });

    this.map.add(matchesLayer, 1);

    const stadiums2026 = new FeatureLayer({
      portalItem: {
        id: "28f8638baed24a9ab91a3d48ad31fff2",
      },
    });

    this.map.add(stadiums2026, 2);

    console.log("feature layers added");
  }

  addPoint(lat: number, lng: number, register: boolean) {
    let point = new Point({
      longitude: lng,
      latitude: lat,
    });

    const simpleMarkerSymbol = {
      type: "simple-marker",
      color: [226, 119, 40], // Orange
      outline: {
        color: [255, 255, 255], // White
        width: 1,
      },
    };
    let pointGraphic: esri.Graphic = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol,
    });

    this.graphicsLayer.add(pointGraphic);
    if (register) {
      this.pointGraphic = pointGraphic;
    }
  }

  removePoint() {
    if (this.pointGraphic != null) {
      this.graphicsLayer.remove(this.pointGraphic);
    }
  }

  runTimer() {
    this.timeoutHandler = setTimeout(() => {
      // code to execute continuously until the view is closed
      // ...
      this.animatePointDemo();
      this.runTimer();
    }, 200);
  }

  animatePointDemo() {
    this.removePoint();
    switch (this.dir) {
      case 0:
        this.pointCoords[1] += 0.01;
        break;
      case 1:
        this.pointCoords[0] += 0.02;
        break;
      case 2:
        this.pointCoords[1] -= 0.01;
        break;
      case 3:
        this.pointCoords[0] -= 0.02;
        break;
    }

    this.count += 1;
    if (this.count >= 10) {
      this.count = 0;
      this.dir += 1;
      if (this.dir > 3) {
        this.dir = 0;
      }
    }

    this.addPoint(this.pointCoords[1], this.pointCoords[0], true);
  }

  stopTimer() {
    if (this.timeoutHandler != null) {
      clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  }

  connectFirebase() {
    if (this.isConnected) {
      return;
    }
    this.isConnected = true;
    this.fbs.connectToDatabase();
    this.subscriptionList = this.fbs
      .getChangeFeedList()
      .subscribe((items: ITestItem[]) => {
        // console.log("got new items from list: ", items);
        this.graphicsLayer.removeAll();
        for (let item of items) {
          this.addPoint(item.lat, item.lng, false);
        }
      });
    this.subscriptionObj = this.fbs
      .getChangeFeedObj()
      .subscribe((stat: ITestItem[]) => {
        // console.log("item updated from object: ", stat);
      });
  }

  addPointItem() {
    // console.log("Map center: " + this.view.center.latitude + ", " + this.view.center.longitude);
    this.fbs.addPointItem(
      this.view.center.latitude,
      this.view.center.longitude
    );
  }

  disconnectFirebase() {
    if (this.subscriptionList != null) {
      this.subscriptionList.unsubscribe();
    }
    if (this.subscriptionObj != null) {
      this.subscriptionObj.unsubscribe();
    }
  }

  ngOnInit() {
    // Initialize MapView and return an instance of MapView
    this.connectFirebase();
    console.log("initializing map");
    this.matches$ = this.firestoreService.getAllMatches();
    // console.log(this.isAuthenticated);
    this.authService.isAuthenticated.subscribe((isAuth) => {
      if (isAuth) {
        console.log("Utilizatorul este autentificat!");
        this.afAuth.authState.subscribe(user => {
          this.user = user;
          this.userEmail = user.email;
        });
      } else {
        console.log("Utilizatorul nu este autentificat!");
      }
    });
    this.initializeMap().then(() => {
      // The map has been initialized
      // console.log("mapView ready: ", this.view.ready);
      this.loaded = this.view.ready;
      this.runTimer();
    });
  }

  ngOnDestroy() {
    if (this.view) {
      // destroy the map view
      this.view.container = null;
    }
    this.stopTimer();
    this.disconnectFirebase();
  }
}
function sleep(arg0: number) {
  throw new Error("Function not implemented.");
}

