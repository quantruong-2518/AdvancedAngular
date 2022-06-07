import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentBRoutingModule } from './component-b-routing.module';
import { ComponentBComponent } from './component-b.component';

@NgModule({
  declarations: [ComponentBComponent],
  imports: [CommonModule, ComponentBRoutingModule],
})
export class ComponentBModule {}
