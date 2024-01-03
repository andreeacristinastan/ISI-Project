import { Component, OnInit } from '@angular/core';
import { IStadium } from '../../models/stadium'; 
import { IMatch } from '../../models/match'; 
import { DataServicee } from './dataservicee';

@Component({
  selector: 'app-liststadiums',
  templateUrl: './liststadiums.component.html',
  styleUrls: ['./liststadiums.component.scss']
})
export class ListstadiumsComponent implements OnInit {

  stadiums: IStadium[];
  displayedMatches: IMatch[];

  constructor(private dataService: DataServicee) {}

  ngOnInit(): void {
    this.stadiums = this.dataService.getStadiums();
  }

  viewMatches(stadium: IStadium): void {
    this.displayedMatches = this.dataService.getMatchesByIds(stadium.next_matches);
  }
}

