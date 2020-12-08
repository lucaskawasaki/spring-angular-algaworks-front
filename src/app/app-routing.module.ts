import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TabViewModule
  ],
  exports: [
    RouterModule,
    TabViewModule
  ]
})
export class AppRoutingModule { }
