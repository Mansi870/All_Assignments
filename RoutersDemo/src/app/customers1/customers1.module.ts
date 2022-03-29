import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customers1RoutingModule } from './customers1-routing.module';
import { Customers1Component } from './customers1.component';


@NgModule({
  declarations: [
    Customers1Component
  ],
  imports: [
    CommonModule,
    Customers1RoutingModule
  ]
})
export class Customers1Module { }
