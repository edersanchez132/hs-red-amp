import { loadRemoteModule } from '@angular-architects/module-federation';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BarraCargaService } from './barra-carga.service';
import { MicrofrontendValidoService } from './microfrontend-valido.service';
import { HttpErrorResponse } from '@angular/common/http';
import { erroresDisponible } from '../types';
import { ConfiguracionMicrofrontend } from '../interfaces';

@Injectable({
  providedIn: 'any'
})
export class MicrofrontendVerticalService {
  /**
   * Propiedad que especifica el error ocurrido.
   */
  public error: erroresDisponible;

  constructor(public readonly routes: Router,
    private readonly barraCargaServicio: BarraCargaService,
    private readonly mfValido: MicrofrontendValidoService) { }

  /**
   * Método para cargar el microfrontend remoto
   * @param informacionMicrofrontend 
   * @returns 
   */
  cargarMicrofrontend(informacionMicrofrontend: ConfiguracionMicrofrontend) {
    this.barraCargaServicio.mostrarCarga();
    return this.obtenerMicrofrontendRemoto(informacionMicrofrontend);
  }

  /**
   * Método para verificar inicialmente que el microfrontend esté dispononible.
   * @param informacionMicrofrontend 
   * @returns 
   */
  private async obtenerMicrofrontendRemoto(informacionMicrofrontend: ConfiguracionMicrofrontend) {
    return new Promise((resolve, reject) => {
      return this.mfValido.esValido(informacionMicrofrontend.remoteEntry).then(() => {
        this.cargarModuloRemoto(informacionMicrofrontend).then(micro => {
          resolve(micro);
        }).catch((error) => { reject(error); });
      }).catch((error: HttpErrorResponse | DOMException) => {
        this.error = error;
        reject(error);
      });
    });
  }

  /**
   * Método para realizar la carga del microfrontend remoto.
   * @param informacionMicrofrontend 
   * @returns 
   */
  private cargarModuloRemoto(informacionMicrofrontend: ConfiguracionMicrofrontend) {

    return new Promise((resolve, reject) => {
      loadRemoteModule(informacionMicrofrontend)
        .then(m => {
          this.barraCargaServicio.ocultarCarga();
          return m[informacionMicrofrontend.nombreModulo ?? ''];
        })
        .then(modulo => {
          if (modulo) {
            resolve(modulo);
          }
          else {
            this.error = 'NO-MODULO';
            reject(new Error('MODULO INCORRECTO'));
          }
        })
        .catch((error: Error) => {
          this.barraCargaServicio.ocultarCarga();
          this.error = error;
          reject(error);
        });
    });
  }
}
