import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchfriendPageRoutingModule } from './searchfriend-routing.module';

import { SearchfriendPage } from './searchfriend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchfriendPageRoutingModule
  ],
  declarations: [SearchfriendPage]
})
export class SearchfriendPageModule {}
