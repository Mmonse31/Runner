import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchfriendPage } from './searchfriend.page';

const routes: Routes = [
  {
    path: '',
    component: SearchfriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchfriendPageRoutingModule {}
