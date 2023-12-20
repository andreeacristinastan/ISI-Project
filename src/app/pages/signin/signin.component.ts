import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/database/authentication.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form!: FormGroup;
  isLoggingIn = false;
  isAuthenticated = false;
  isRecoveringPassword = false;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar : MatSnackBar,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // console.log(this.isAuthenticated);

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.isLoggingIn = true;
    
    this.authenticationService.signIn({
      email: this.form.value.email,
      password: this.form.value.password
    }).subscribe(() => {
      // this.isAuthenticated = true;
      // console.log('isAuthenticated este setat la true');
      this.router.navigate(['map']);
      this.cd.detectChanges();
    }, (error: any) => {
      this.isLoggingIn = false;
      this.snackBar.open(error.message, "OK", {
        duration: 5000
      });
    })
  }

  logout() {
    console.log('Metoda logout a fost apelată!');
    this.authenticationService.logout().subscribe(() => {
      // this.isAuthenticated = false;
      this.router.navigate(['map']);
      this.cd.detectChanges();
    }, (error: any) => {
      this.snackBar.open(error.message, "OK", {
        duration: 5000
      });
    });
  }

  recoverPassword() {
    this.isRecoveringPassword = true;

    this.authenticationService.recoverPassword(
      this.form.value.email
    ).subscribe(() => {
      this.isRecoveringPassword = false;

      this.snackBar.open("An email was sent if the account exist", "OK", {
        duration: 5000
      });
    }, (error: any) => {
      this.isRecoveringPassword = false;
      this.snackBar.open(error.message, "OK", {
        duration: 5000
      });
    })
  }

}
