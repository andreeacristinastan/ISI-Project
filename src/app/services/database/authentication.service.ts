import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, from, Observable, of, tap, throwError} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthError, createUserWithEmailAndPassword, getAuth, UserCredential } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // currentUser$ = authState(this.auth);
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated: Observable<boolean> = this._isAuthenticated.asObservable();
  constructor(
    private auth: AngularFireAuth, private router: Router ) {
      // const auth: Auth = this.afAuth.auth;
    }
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

  // signup(params: SignUp): Observable<any> {
  //   const auth = this.auth;
  //   // console.log(auth);
  //   console.log('signup function called with params:', params);
    
  //   return from(
  //     createUserWithEmailAndPassword(auth, params.email, params.password)
  //   ).pipe(
  //     catchError((error: AuthError) =>
  //       throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
  //     )
  //   );
  // }

  signup(params: SignUp): Observable<any> {
    return from(
      this.auth.createUserWithEmailAndPassword(params.email, params.password)
    ).pipe(
      catchError((error: AuthError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  checkEmailExists(email: string): Observable<string[]> {
    return from(this.auth.fetchSignInMethodsForEmail(email))
      .pipe(
        catchError(error => {
          console.error('An error occurred:', error);
          throw error;
        })
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

type SignUp = {
  email: string;
  password: string;
};

type FirebaseError = {
  code: string;
  message: string
};


