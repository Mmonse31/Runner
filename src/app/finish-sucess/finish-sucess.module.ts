import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishSucessPageRoutingModule } from './finish-sucess-routing.module';

import { FinishSucessPage } from './finish-sucess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishSucessPageRoutingModule
  ],
  declarations: [FinishSucessPage]
})
export class FinishSucessPageModule {}
