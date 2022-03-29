import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Customers1Component } from './customers1.component';

const routes: Routes = [{ path: '', component: Customers1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customers1RoutingModule { }
