import { Component, OnInit } from '@angular/core';
import { IStadium } from '../../models/stadium'; 
import { IMatch } from '../../models/match'; 
import { DataService } from 'src/app/services/database/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-liststadiums',
  templateUrl: './liststadiums.component.html',
  styleUrls: ['./liststadiums.component.scss'],
  providers: [DataService],
})
export class ListstadiumsComponent implements OnInit {

  displayedMatches: IMatch[];
  matches$: Observable<any>;
  stadiums$: Observable<any>;

  constructor(private myDataService: DataService) {
    this.matches$ = myDataService.getAllMatches();
    this.stadiums$ = myDataService.getAllStadiums();
  }

  ngOnInit(): void {
   
  }

  viewMatches(stadium: IStadium): void {
    console.log(stadium);
    let allMatches = [] as IMatch[]   

    this.matches$.forEach((matches: IMatch[]) => {
      allMatches = matches.filter((match: IMatch) => stadium.next_matches.includes(match.match_id));
      this.displayedMatches = allMatches;
    })
 
  }
}

