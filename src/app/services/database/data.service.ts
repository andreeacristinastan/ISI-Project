import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore"
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IMatch } from 'src/app/models/match';
import { Observable, map } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  matches$: AngularFireList<Observable<any>>;
  stadiums$: AngularFireList<Observable<any>>;

  constructor(private db : AngularFireDatabase) { 
    this.matches$ = this.db.list('/matches');
    this.stadiums$ = this.db.list('/stadiums');
  } 

  getAllStadiums() {
    return this.stadiums$.valueChanges();
  }
  
  getAllMatches() {
    return this.matches$.valueChanges();
  }

  bookTicket(matchId: number) {
      console.log("Booking ticket...");
      
      // @TODO Add user checking
      if(false) {
        this.db.object(`matches/${matchId}/available_tickets`).query.ref.transaction(tickets => {
          console.log(tickets); return tickets - 1;});
      }   

  }
  
}
