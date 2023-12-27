import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore"
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IMatch } from 'src/app/models/match';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  matches$ : IMatch[] = null;

  constructor(private db : AngularFireDatabase) { 
    // this.db.list('/matches').valueChanges().subscribe((res: IMatch[]) => {
    //   console.log(res);
    //  this.matches$ = res
    // });
    // console.log(this.matches$);
    
  } 

  getAllStadiums() {
    return this.db.list('/stadiums').valueChanges();
  }
  
  getAllMatches() {
    return this.db.list('/matches').valueChanges();
  }

  bookTicket(match_id: number) {
      // const matches = ref(db, );
      // const matches = this.db.database.ref('matches/' + match_id);
      // console.log(matches);
      return this.matches$;
      const match = this.db.object('matches' + match_id);
      console.log(match);



      // match.update({available_tickets: })

      // this.afs.collection('/Matches/').doc(match_id.toString()).update({available_tickets: });
  }
  
}
