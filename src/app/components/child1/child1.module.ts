import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Child1RoutingModule } from './child1-routing.module';
import { Child1Component } from './child1.component';

@NgModule({
  declarations: [Child1Component],
  imports: [CommonModule, Child1RoutingModule],
  exports: [Child1Component],
})
export class Child1Module {}
