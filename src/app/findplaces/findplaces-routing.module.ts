import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindplacesPage } from './findplaces.page';

const routes: Routes = [
  {
    path: '',
    component: FindplacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindplacesPageRoutingModule {}
