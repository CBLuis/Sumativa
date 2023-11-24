import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaprinPageRoutingModule } from './paginaprin-routing.module';

import { PaginaprinPage } from './paginaprin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaprinPageRoutingModule
  ],
  declarations: [PaginaprinPage]
})
export class PaginaprinPageModule {}
