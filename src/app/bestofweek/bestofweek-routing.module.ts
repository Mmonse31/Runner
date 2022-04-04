import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestofweekPage } from './bestofweek.page';

const routes: Routes = [
  {
    path: '',
    component: BestofweekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BestofweekPageRoutingModule {}
