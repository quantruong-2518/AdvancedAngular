import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';

import { HomepageComponent } from './homepage.component';
import { CounterComponent } from 'src/app/components/counter/counter.component';

@NgModule({
  declarations: [HomepageComponent, CounterComponent],
  imports: [CommonModule, HomepageRoutingModule],
})
export class HomepageModule {}
