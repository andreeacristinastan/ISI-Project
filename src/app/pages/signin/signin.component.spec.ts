import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
// import { BlankComponent } from '../mocks/blank/blank.component';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/database/authentication.service';
import { EsriMapComponent } from '../esri-map/esri-map.component';
import { MatSnackBar} from '@angular/material/snack-bar';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let page: any;
  let location: Location;
  let authenticationService: AuthenticationServiceMock;
  let snackBar: SnackBarMock;

  beforeEach(async () => {
    authenticationService = new AuthenticationServiceMock();
    snackBar = new SnackBarMock();

    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: 'map', component: EsriMapComponent}
        ])
      ]
    })
    .overrideProvider(AuthenticationService, {useValue: authenticationService})
    .overrideProvider(MatSnackBar, {useValue: snackBar})
    .compileComponents();

    fixture = TestBed.createComponent(SigninComponent);
    location = TestBed.inject(Location);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;


    fixture.detectChanges();
  });

  describe('given form', () => {
    it('when email is empty, then recover password should be disabled', () => {
      setEmail('');
      expect(page.querySelector('[test-id="recover-password-button"]').disabled).toBeTruthy();
    })
  
    it('when email is invalid, then recover password should be disabled', () => {
      setEmail('invalidEmail');
      fixture.detectChanges();
  
      expect(page.querySelector('[test-id="recover-password-button"]').disabled).toBeTruthy();
    })
  
    it('when email is valid, then recover password should be enabled', () => {
      setEmail('valid@gmail.com');
      fixture.detectChanges();
  
      expect(page.querySelector('[test-id="recover-password-button"]').disabled).toBeFalsy();
    })

    it('when email is empty, then login button should be disabled', () => {
      setEmail('');
      setPassword('anyPassword');
      expect(page.querySelector('[test-id="login-button"]').disabled).toBeTruthy();
    })

    it('when email is invalid, then login button should be disabled', () => {
      setEmail('invalidEmail');
      setPassword('anyPassword');
      expect(page.querySelector('[test-id="login-button"]').disabled).toBeTruthy();
    })

    it('when password is empty, then login button should be disabled', () => {
      setEmail('valid@gmail.com');
      setPassword('');
      expect(page.querySelector('[test-id="login-button"]').disabled).toBeTruthy();
    })

    it('when password is not empty, then login button should be enabled', () => {
      setEmail('valid@gmail.com');
      setPassword('anyPassword');
      expect(page.querySelector('[test-id="login-button"]').disabled).toBeFalsy();
    });
  })


  describe('Login flow', () => {
    describe('given user clicks on login button', () => {

      beforeEach(() => {
        setEmail('valid@email.com');
        setPassword('anyPassword');
        loginButton().click();
        fixture.detectChanges();
      })

      it('the show login loader', () => {
        expect(loginLoader()).not.toBeNull();
      })
  
      it('the hide login button', () => {
        expect(loginButton()).toBeNull();
      })

      describe('when login is successful', () => {

        beforeEach(() => {
          authenticationService._signInResponse.next({id: "anyUserId"});
        })

        it('then go to home page', done => {
          setTimeout(() => {
            expect(location.path()).toEqual('map');
            done();
          }, 100)
        })

      })

      describe('when login fails', () => {

        beforeEach(() => {
          authenticationService._signInResponse.error({message: "anyError"});
          fixture.detectChanges();
        })

        it('then do not go to home page', () => {
          expect(location.path()).not.toEqual('map');
        })

        it('then hide login loader', () => {
          expect(loginLoader()).toBeNull();
        })

        it('then show login button', () => {
          expect(loginButton()).not.toBeNull();
        })

        it('then show error message', () => {
          expect(snackBar._isOpened).toBeTruthy();
        })

      })
  });
})


  describe('given form', () => {

    it('when email is empty, then recover password button should be disabled', () => {
      setEmail('');
  
      expect(recoverPasswordButton().disabled).toBeTruthy();
    })
  
    it('when email is invalid, then recover password button should be disabled', () => {
      setEmail('invalidEmail');
  
      expect(recoverPasswordButton().disabled).toBeTruthy();
    })
  
    it('when email is valid, then recover password button should be enabled', () => {
      setEmail('valid@email.com');
  
      expect(recoverPasswordButton().disabled).toBeFalsy();
    })

  })
  describe('Recover password flow', () => {

  describe('given user clicks on recover password button', () => {

    beforeEach(() => {
      setEmail('valid@email.com');
      recoverPasswordButton().click();
      fixture.detectChanges();
    })


    it('then show recover password loader', () => {
      expect(recoverPasswordLoader()).not.toBeNull();
    })

    it('then hide recover password button', () => {
      expect(recoverPasswordButton()).toBeNull();
    })

    describe('when recover password success', () => {

      beforeEach(() => {
        authenticationService._recoverPasswordResponse.next({});
        fixture.detectChanges();
      })

      it('then hide recover password loader', () => {
        expect(recoverPasswordLoader()).toBeNull();
      })

      it('then show recover password button', () => {
        expect(recoverPasswordButton()).not.toBeNull();
      })

      it('then show success message', () => {
        expect(snackBar._isOpened).toBeTruthy();
      })

    })

    describe('when recover password fails', () => {

      beforeEach(() => {
        authenticationService._recoverPasswordResponse.error({message: "any message"});
        fixture.detectChanges();
      })

      it('then hide recover password loader', () => {
        expect(recoverPasswordLoader()).toBeNull();
      })

      it('then show recover password button', () => {
        expect(recoverPasswordButton()).not.toBeNull();
      })

      it('then show error message', () => {
        expect(snackBar._isOpened).toBeTruthy();
      })

    })

  })

})

 function setEmail(value: string) {
    component.form.get('email')?.setValue(value);
    fixture.detectChanges();
  }

  function setPassword(value: string) {
    component.form.get('password')?.setValue(value);
    fixture.detectChanges();
  }

  function recoverPasswordButton() {
    return page.querySelector('[test-id="recover-password-button"]');
  }

  function loginButton() {
    return page.querySelector('[test-id="login-button"]');
  }

  function loginLoader() {
    return page.querySelector('[test-id="login-loader"]');
  }

  function recoverPasswordLoader() {
    return page.querySelector('[test-id="recover-password-loader"]');
  }

});

class AuthenticationServiceMock {
  _recoverPasswordResponse = new Subject();
  _signInResponse = new Subject();
  recoverPassword() {
    return this._recoverPasswordResponse.asObservable();
  }
  signIn() {
    return this._signInResponse.asObservable();
  }
}

class SnackBarMock {
  _isOpened = false;
  open() {
    this._isOpened = true;
  }
}