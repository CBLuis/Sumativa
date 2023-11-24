import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaprinPage } from './paginaprin.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaprinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaprinPageRoutingModule {}
