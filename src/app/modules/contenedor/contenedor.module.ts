import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenedorRoutingModule } from './contenedor-routing.module';
import { LayoutInicioComponent } from './layout/layout-inicio/layout-inicio.component';
import { MenuComponent,HeaderComponent,UsuarioInformacionComponent } from './components';

import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LayoutMicroComponent } from './layout/layout-micro/layout-micro.component';
import { HorizontalComponent } from './pages/horizontal/horizontal.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LayoutInicioComponent,
    MenuComponent,
    HeaderComponent,
    UsuarioInformacionComponent,
    LayoutMicroComponent,
    HorizontalComponent
  ],
  imports: [
    CommonModule,
    ContenedorRoutingModule,
    MatRippleModule,
    MatButtonModule, MatIconModule,
    SharedModule
  ]
})
export class ContenedorModule { }
