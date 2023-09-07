import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoPageRoutingModule } from './auto-routing.module';

import { AutoPage } from './auto.page';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AutoPageRoutingModule,
    [MatButtonModule, MatDividerModule, MatIconModule, MatProgressBarModule],
  ],
  declarations: [AutoPage]
})
export class AutoPageModule {}
