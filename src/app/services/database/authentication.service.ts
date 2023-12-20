import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, Observable, of, tap, throwError} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // currentUser$ = AuthState(this.auth);
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated: Observable<boolean> = this._isAuthenticated.asObservable();
  constructor(
    private auth: AngularFireAuth, private router: Router ) {}
  // ) { this.auth.authState.subscribe(user => {
  //   this._isAuthenticated.next(!!user);
  // });}

  signIn(params: SignIn): Observable<any> {
    // console.log('Autentificare reușită!')
    return from(this.auth.signInWithEmailAndPassword(
      params.email, params.password
    )).pipe(
      tap(() => this._isAuthenticated.next(true)),
      catchError((error: FirebaseError) => 
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  logout(): Observable<void> {
    return from(this.auth.signOut()).pipe(
      tap(() => {
        this._isAuthenticated.next(false);
        this.router.navigate(['/map']); // Redirecționează utilizatorul la tabul "Map"
      }),
      catchError((error: FirebaseError) => 
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }
  

  recoverPassword(email: string): Observable<void> {
    return from(this.auth.sendPasswordResetEmail(email)).pipe(
      catchError((error: FirebaseError) => 
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  private translateFirebaseErrorMessage({code, message}: FirebaseError) {
    if (code === "auth/user-not-found") {
      return "User not found.";
    }
    if (code === "auth/wrong-password") {
      return "User not found.";
    }
    return message;
  }
}

type SignIn = {
  email: string;
  password: string;
}

type FirebaseError = {
  code: string;
  message: string
};
