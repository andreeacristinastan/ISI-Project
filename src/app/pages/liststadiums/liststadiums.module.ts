import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListstadiumsComponent } from './liststadiums.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListstadiumsComponent
  }
]

@NgModule({
  declarations: [
    ListstadiumsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ListstadiumsModule { }
