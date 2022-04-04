import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BestofbestPageRoutingModule } from './bestofbest-routing.module';

import { BestofbestPage } from './bestofbest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BestofbestPageRoutingModule
  ],
  declarations: [BestofbestPage]
})
export class BestofbestPageModule {}
