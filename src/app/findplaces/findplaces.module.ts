import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindplacesPageRoutingModule } from './findplaces-routing.module';

import { FindplacesPage } from './findplaces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindplacesPageRoutingModule
  ],
  declarations: [FindplacesPage]
})
export class FindplacesPageModule {}
