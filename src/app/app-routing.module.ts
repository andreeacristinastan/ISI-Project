import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EsriMapComponent } from './pages/esri-map/esri-map.component';
// import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module')
    .then(m => m.SigninModule)
  },

  {
    path: 'myaccount',
    loadChildren: () => import('./pages/my-account/my-account.module')
    .then(m => m.MyAccountModule)
  },
  // {
  //   path: 'logout',
  //   loadChildren: () => import('./pages/signin/signin.module')
  //   .then(m => m.SigninModule)
  // },
  // {
  //   path: 'myaccount',
  //   redirectTo: 'myaccount',
  // },
  {
    path: 'map',
    component: EsriMapComponent,
  },
  {
    path: '',
    redirectTo: 'map',
    pathMatch: 'full',
  }
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
