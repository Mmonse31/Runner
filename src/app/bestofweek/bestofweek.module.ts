import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestofweekPageRoutingModule } from './bestofweek-routing.module';

import { BestofweekPage } from './bestofweek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestofweekPageRoutingModule
  ],
  declarations: [BestofweekPage]
})
export class BestofweekPageModule {}
