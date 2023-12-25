import { Component } from '@angular/core';
import { NavigationEnd, Event, Router } from '@angular/router';
import { Observable, first } from 'rxjs';
import { AuthenticationService } from './services/database/authentication.service';
import { ChangeDetectorRef } from '@angular/core';

interface ITab {
  name: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  tabs: ITab[] = [//{
    // name: 'Home',
    // link: '/home'
  /*},*/ 
  
  
  {
    name: 'Map',
    link: '/map'
  },
  {
    name: 'Create an account',
    link: '/signup'
  }, {
    name: 'Sign In',
    link: '/signin'
  }];

  activeTab = this.tabs[0].link;
  isAuthenticated: Observable<boolean>;

  constructor(private router: Router, private authService: AuthenticationService, private cd: ChangeDetectorRef) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.activeTab = event.url;
        console.log(event);

      }
    });
  }

  // onTabClick(last: boolean, tab: any) {
  //   if (last) {
  //     this.authService.isAuthenticated.subscribe(isAuth => {
  //       if (isAuth) {
  //         this.authService.logout().subscribe(() => {
  //           this.activeTab = tab.link;
  //         });
  //       } else {
  //         this.activeTab = tab.link;
  //       }
  //     });
  //   } else {
  //     this.activeTab = tab.link;
  //   }
  // }

  onTabClick(last: boolean, tab: any) {
    if (last) {
      this.authService.isAuthenticated.pipe(first()).subscribe(isAuth => {
        if (isAuth) {
          this.authService.logout().subscribe(() => {
            this.activeTab = tab.link;
          });
        } else {
          this.activeTab = tab.link;
        }
      });
    } else {
      this.activeTab = tab.link;
    }
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated;

    
    this.authService.isAuthenticated.subscribe(isAuth => {
      if (isAuth) {
        // if (isAuthenticated) {
          this.tabs.splice(2, 0, {
            name: 'My Account',
            link: '/myaccount'
          });
        // }
      } else {
        // Utilizatorul nu este autentificat
        const index = this.tabs.findIndex(tab => tab.name === 'My Account');
        if (index > -1) {
          this.tabs.splice(index, 1);
        }
      }
    });
  }
    
  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);

  }
}

