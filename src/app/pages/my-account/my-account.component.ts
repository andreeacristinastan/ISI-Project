import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { User } from 'firebase/auth';
import { take } from 'rxjs';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  user: User | null = null;
  tickets : string[] = [];
  constructor(private afAuth: AngularFireAuth, private db : AngularFireDatabase) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(user => {
      this.user = user;
      //save the tickets
      this.getTickets(user.email);
      console.log(this.user);
    });
    
  }

  async getTickets(userEmail: string) {
    try {
      const data : any = await this.db.list('/users', ref => ref.orderByChild('email').equalTo(userEmail)).valueChanges().pipe(take(1)).toPromise();
      if (data && data.length > 0) {
        this.tickets = data[0].tickets_booked;
      }
    } catch (error) {
      console.error("Error retrieving tickets", error);
    }
  }
}
