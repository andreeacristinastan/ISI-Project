import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { RouterModule, Routes } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

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
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class MyAccountModule { }

