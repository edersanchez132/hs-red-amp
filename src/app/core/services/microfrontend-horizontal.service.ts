import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable, Injector, ViewContainerRef } from '@angular/core';
import { BarraCargaService } from './barra-carga.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NoDisponibleComponent } from '../components';
import { ERROR_TOKEN } from '../tokens';
import { MicrofrontendValidoService } from './microfrontend-valido.service';
import { ConfiguracionMicrofrontend } from '../interfaces';
import { erroresDisponible } from '../types';

@Injectable({
  providedIn: 'any'
})
export class MicrofrontendHorizontalService {

  /**
   * Constructor de servicio para la carga de microfontend's horizontales.
   * @param barraCargaServicio Servicio para la visibilidad de la barra de carga. 
   * @param mfValido Servicio para validar si el microfront se encuentra disponible.
   * @param injector ...
   */
  constructor(
    private readonly barraCargaServicio: BarraCargaService,
    private readonly mfValido: MicrofrontendValidoService,
    private readonly injector: Injector) { }

  /**
   * 
   * @param informacionMicrofrontend  Información del microfront a cargar tales como: url,nombre, etc.
   * @param viewContainerRef El contenedor donde se cargará el microfontend horizontal.
   */
  cargarMicrofrontend(informacionMicrofrontend: ConfiguracionMicrofrontend) {
    this.barraCargaServicio.mostrarCarga();

    return new Promise((resolve, reject) => {
      this.mfValido.esValido(informacionMicrofrontend.remoteEntry)
        .then(() => {
          this.obtenerMicrofrontendRemoto(informacionMicrofrontend).then(micro => {
            resolve(micro);
          }).catch(error => { reject(error); });
        })
        .catch((error: HttpErrorResponse | DOMException) => {
          reject(this.crearComponenteError(error));
        });
    });
  }

  /**
   * Método que carga el microfrontend, utilizando el método `loadRemoteModule` de AngularArchitects
   * @param informacionMicrofrontend Información del microfront a cargar tales como: url,nombre, etc.
   */
  private obtenerMicrofrontendRemoto(informacionMicrofrontend: ConfiguracionMicrofrontend) {
    return new Promise((resolve, reject) => {
      loadRemoteModule(informacionMicrofrontend)
        .then(m => {
          this.barraCargaServicio.ocultarCarga();
          return m[informacionMicrofrontend.nombreComponente ?? ''];
        }).then((componente) => {
          if (componente) {
            resolve(componente);
          }
          else {
            reject(this.crearComponenteError('NO-COMPONENTE'));
          }
        })
        .catch((error: Error) => {
          reject(this.crearComponenteError(error));
        });
    });
  }

  /**
   * Método que genera el componente de error, que se muestra en el contenedor especificado.
   * @param error El error generado al intentar cargar el microfrontend.
   */
  private crearComponenteError(error: erroresDisponible) {
    const _injector = Injector.create({
      providers: [{ provide: ERROR_TOKEN, useValue: error }],
      parent: this.injector
    });
    return {
      errorComponente: NoDisponibleComponent,
      inject: { index: 0, injector: _injector }
    };
  }
}
