import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { RouterModule, Routes } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';

const routes: Routes = [
  {
    path: '',
    component: MyAccountComponent
  }
]

@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    RouterModule.forChild(routes)
  ]
})
export class MyAccountModule { }

