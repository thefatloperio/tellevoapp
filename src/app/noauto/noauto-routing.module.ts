import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoautoPage } from './noauto.page';

const routes: Routes = [
  {
    path: '',
    component: NoautoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoautoPageRoutingModule {}
