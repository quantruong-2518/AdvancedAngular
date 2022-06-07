import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentARoutingModule } from './component-a-routing.module';
import { ComponentAComponent } from './component-a.component';

@NgModule({
  declarations: [ComponentAComponent],
  imports: [CommonModule, ComponentARoutingModule],
})
export class ComponentAModule {}
