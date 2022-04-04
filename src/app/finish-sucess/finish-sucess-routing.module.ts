import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishSucessPage } from './finish-sucess.page';

const routes: Routes = [
  {
    path: '',
    component: FinishSucessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishSucessPageRoutingModule {}
