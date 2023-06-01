import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoEncontradoComponent } from './core/components';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/contenedor/contenedor.module').then(m => m.ContenedorModule)
  },
  {
    path: '**',
    component: NoEncontradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
