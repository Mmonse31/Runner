import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilefriendPageRoutingModule } from './profilefriend-routing.module';

import { ProfilefriendPage } from './profilefriend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilefriendPageRoutingModule
  ],
  declarations: [ProfilefriendPage]
})
export class ProfilefriendPageModule {}
