import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { log } from 'console';
import { logging } from 'protractor';
import { catchError, from } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from 'src/app/services/database/authentication.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {MatSelectModule} from '@angular/material/select';


export function passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password && confirmPassword && password !== confirmPassword ? { 'passwordsDontMatch': true } : null;
}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form!: FormGroup;
  isRegistered = false;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private authenticationService: AuthenticationService,
    private snackBar : MatSnackBar,
    private cd: ChangeDetectorRef,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private matSelect: MatSelectModule
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      country: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    }, { validators: passwordsMatchValidator });
  }

  get email() {
    email: this.form.value.email;
    return this.email;
  }

  get password() {
    password: this.form.value.password;
    return this.password;
  }

  // get confirmPassword() {
  //   return this.form.get('confirmPassword');
  // }

  // get name() {
  //   return this.form.get('name');
  // }

  register() {
    // if (this.form.valid && !this.form.hasError('passwordsDontMatch')) {
      // passwordsMatchValidator();
    this.authenticationService.checkEmailExists(this.form.value.email).subscribe((methods) => {
      if (methods.length === 0) {
        // The email doesn't exist, so we can create the account
          this.authenticationService.signup({
            email: this.form.value.email,
            password: this.form.value.password
          }).subscribe(() => {
            // console.log("am intrat");
            const userData = {
              firstName: this.form.value.firstName,
              lastName: this.form.value.lastName,
              email: this.form.value.email,
              age: this.form.value.age,
              country: this.form.value.country,
              phoneNumber: this.form.value.phoneNumber,
              tickets_booked: 0, // Initialize as empty array or set a default value
              password: this.form.value.password // Make sure to handle this securely
              // username: this.form.value.username
            };
        
            this.db.list('Users').push(userData)
              .then(() => console.log('User added'))
              .catch(error => console.error('Error adding user: ', error));

            this.snackBar.open('Account created successfully!', 'OK', {
              duration: 5000
            });
            // this.router.navigate(['map']);
            
            this.cd.detectChanges();
          }, (signupError: any) => {
            this.snackBar.open(signupError.message, 'OK', {
              duration: 5000
            });
          });
      } else {
        // The email already exists
        this.snackBar.open('The email address is already in use by another account.', 'OK', {
          duration: 5000
        });
      }
    }, (error: any) => {
      // Some other error occurred
      this.snackBar.open(error.message, 'OK', {
        duration: 5000
      });
    });
  // }else {
  //   // The form is not valid
  //   this.snackBar.open('The form is not valid. Please check the inputs.', 'OK', {
  //     duration: 5000
  //   });
  // }
    
    
  

    // this.authenticationService.signup({
      
    //   email: this.form.value.email,
    //   password: this.form.value.password
    // }).subscribe(() => {
    //   // this.isAuthenticated = true;
    //   // console.log('isAuthenticated este setat la true');
    // console.log("am intrat");
    // this.snackBar.open('Account created successfully!', 'OK', {
    //   duration: 5000
    // });
    //   this.router.navigate(['map']);
    //   this.cd.detectChanges();
    // }, (error: any) => {

    //   this.snackBar.open(error.message, "OK", {
    //     duration: 5000
    //   });
    // })

    // event.preventDefault();
  //   const { email, password } = this.form.value;
  //   this.afAuth.createUserWithEmailAndPassword(email, password)
  //   .then((result) => {
  //     if (result.user) {
  //       console.log('User registered successfully', result.user);

  //       this.router.navigate(['/map']);
  //     }
  //   })
  //   .catch((error) => {
  //     console.error('Error registering user', error);
  //   });
  }

  
  
  

}
