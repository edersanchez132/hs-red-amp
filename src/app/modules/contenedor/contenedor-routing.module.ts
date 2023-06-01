import { NgModule } from '@angular/core';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { LayoutInicioComponent } from './layout';
import { HeaderComponent, MenuComponent } from './components';

import { NoDisponibleComponent } from '../../core/components';
import { MicrofrontendVerticalService } from '../../core//services';
import { HorizontalComponent } from './pages';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenedorRoutingModule {
  private readonly microfrontendRutas = [
    {
      'path': 'encripta',
      'remoteEntry': ' http://localhost:4203/remoteEntry.js',
      'exposedModule': 'Encriptacion',
      'modulo': 'EncriptacionModule'
    },
    {
      'path': 'busqueda',
      'remoteEntry': ' http://localhost:4205/remoteEntry.js',
      'exposedModule': 'Busqueda',
      'modulo': 'MicrofrontBusquedaModule'
    },
    {
      'path': 'alta',
      'remoteEntry': ' http://localhost:4205/remoteEntry.js',
      'exposedModule': 'Alta',
      'modulo': 'MicrofrontAltaModule'
    }
  ];

  constructor(private readonly router: Router,
    private readonly servicioMicro: MicrofrontendVerticalService) {
    const principalRouter = {
      path: '',
      component: LayoutInicioComponent,
      children: [
        {
          path: '',
          component: HeaderComponent,
          outlet: 'header'
        },
        {
          path: '',
          component: MenuComponent,
        },
        {
          path: 'no-disponible',
          component: NoDisponibleComponent
        }
      ]
    };
    routes.push(principalRouter);

    this.cargarMicrofronts(principalRouter);
  }

  cargarMicrofronts(pr: Route) {
    this.microfrontendRutas.forEach(rutas => {
      if (pr.children) {
        pr.children.push(
          {
            path: rutas.path,
            loadChildren: () => this.servicioMicro.cargarMicrofrontend({
              type: 'module',
              remoteEntry: rutas.remoteEntry,
              exposedModule: rutas.exposedModule,
              nombreModulo: rutas.modulo
            }).then(o => {
              return (o as any);
            }).catch(() => {
              this.router.navigate(['no-disponible'], { skipLocationChange: true });
            })
          });
      }
    });
    if (pr.children) {
      pr.children.push({
        path: 'horizontal',
        component: HorizontalComponent
      });
    }

  }
}
