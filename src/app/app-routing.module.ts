import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InputTextModule,
    ButtonModule
  ],
  exports: [
    RouterModule,
    InputTextModule,
    ButtonModule
  ]
})
export class AppRoutingModule { }
