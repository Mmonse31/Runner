import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilefriendPage } from './profilefriend.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilefriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilefriendPageRoutingModule {}
