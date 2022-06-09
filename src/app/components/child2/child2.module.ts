import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child2RoutingModule } from './child2-routing.module';
import { Child2Component } from './child2.component';

@NgModule({
  declarations: [Child2Component],
  imports: [CommonModule, Child2RoutingModule],
  exports: [Child2Component],
})
export class Child2Module {}
