import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'firebase/auth';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  user: User | null = null;
  matches$: AngularFireList<Observable<any>>;
  stadiums$: AngularFireList<Observable<any>>;
  details: string = "";
  newData : User | null = null;

  constructor(private db : AngularFireDatabase, private authService: AuthenticationService) { 
    this.matches$ = this.db.list('/matches');
    this.stadiums$ = this.db.list('/stadiums');
  } 


  getAllStadiums() {
    return this.stadiums$.valueChanges();
  }
  
  getAllMatches() {
    return this.matches$.valueChanges();
  }

  async bookTicket(matchId: number, userEmail: string) {
      console.log("Booking ticket...");
      
      // Check if user is authenticated
      this.authService.isAuthenticated.subscribe(async (isAuth) => {
        if (isAuth) {
          this.db.object(`matches/${matchId}/available_tickets`).query.ref.transaction(tickets => {
            console.log(tickets); return tickets - 1;});
    
          try {
            const matchDetails : any = await this.db.object(`matches/${matchId}`).valueChanges().pipe(take(1)).toPromise();
    
            if (matchDetails)
              this.details = `Match id: ${matchId}, playing: ${matchDetails.home_team} VS ${matchDetails.away_team} in round ${matchDetails.round}`;
              
    
            const data : any = await this.db.list('/users', ref => ref.orderByChild('email').equalTo(userEmail)).valueChanges().pipe(take(1)).toPromise();
        
            if (data && data.length > 0) {
              if (data[0].tickets_booked[0] === "aaa") {
                data[0].tickets_booked.pop();
              }
              data[0].tickets_booked.push(this.details);
              this.newData = data[0];
            }
        
            const snapshot = await this.db.database.ref().child("users").orderByChild("email").equalTo(userEmail).once("value");
        
            snapshot.forEach(child => {
              child.ref.update(this.newData);
            });
          } catch (error) {
            console.error("Error booking ticket:", error);
          }
        } else {
          console.log("Utilizatorul nu este autentificat!");
        }
      });
    }
}
