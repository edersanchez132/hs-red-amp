import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  BarraCargaComponent,
  NoEncontradoComponent,
  NoDisponibleComponent
} from './components';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    NoEncontradoComponent,
    NoDisponibleComponent,
    BarraCargaComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NoEncontradoComponent,
    NoDisponibleComponent,
    BarraCargaComponent
  ]
})
export class CoreModule { }
