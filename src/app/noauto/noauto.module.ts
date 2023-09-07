import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoautoPageRoutingModule } from './noauto-routing.module';

import { NoautoPage } from './noauto.page';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoautoPageRoutingModule,
    [MatProgressBarModule],
    [MatButtonModule, MatDividerModule, MatIconModule],
  ],
  declarations: [NoautoPage]
})
export class NoautoPageModule {}
