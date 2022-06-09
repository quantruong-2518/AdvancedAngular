import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentARoutingModule } from './component-a-routing.module';
import { ComponentAComponent } from './component-a.component';
import { Child1Module } from 'src/app/components/child1/child1.module';
import { Child2Module } from 'src/app/components/child2/child2.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ComponentAComponent],
  imports: [
    CommonModule,
    ComponentARoutingModule,
    Child1Module,
    Child2Module,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComponentAModule {}
