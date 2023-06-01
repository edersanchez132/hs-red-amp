import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, Optional } from '@angular/core';
import { MicrofrontendVerticalService } from '../../../core/services';
import { ERROR_TOKEN } from '../../../core/tokens';
import { HostRediError, RediMensajeError } from '../../../core/errors';
import { erroresDisponible } from '../../../core/types';

@Component({
  selector: 'app-no-disponible',
  templateUrl: './no-disponible.component.html',
  styleUrls: ['./no-disponible.component.scss']
})
export class NoDisponibleComponent {
  /**
   * Obtiene o establece los distintos tipos de error posibles.
   */
  public error: erroresDisponible;

  /**
   * Obtiene o establece el mensaje de error a mostrar en el componente.
   */
  protected errorMesage: RediMensajeError | undefined;
  /**
   * Obtiene o establece el detalle del error obtenido en el componente.
   */
  protected detalle: string | undefined;


  constructor(
    @Optional() @Inject(ERROR_TOKEN) error: erroresDisponible,
    private readonly verticalMicrofrontService: MicrofrontendVerticalService) {

    this.error = this.verticalMicrofrontService.error ? this.verticalMicrofrontService.error : error;
    this.configurarError();
  }

  /**
   * Establece la acción a realizar de acuerdo al tipo de error generado.
   */
  public configurarError(): void {
    if (this.error instanceof HttpErrorResponse) {
      this.erroresServidor(this.error);
    }
    else if (this.error instanceof DOMException) {
      this.erroresDOM(this.error);
    }
    else if (this.error instanceof TypeError) {
      this.erroresType(this.error);
    }
    else if (this.error instanceof Error) {
      this.erroresErr(this.error);
    }
    else { this.erroresString(this.error ?? ''); }
  }


  /**
   * Procesa los errores obtenidos desde el servidoor.
   * @param httpErrorResponse Error obtenido del servidor.
   */
  private erroresServidor(httpErrorResponse: HttpErrorResponse): void {
    this.detalle = httpErrorResponse.message;
    const error = {
      unknown: 0,
      notFound: 404,
      serverError: 500
    };
    switch ((this.error as HttpErrorResponse)?.status) {
      case error.unknown: {
        this.errorMesage = HostRediError.DESCONOCIDO;
        break;
      }
      case error.notFound: {
        this.errorMesage = HostRediError.NOENCONTRADO;
        break;
      }
      case error.serverError: {
        this.errorMesage = HostRediError.ERRORSERVIDOR;
        break;
      }
    }
  }

  /**
   * Procesa los errores obtenidos en el front.
   * @param dOMException La excepción ocurrida en el DOM.
   */
  private erroresDOM(dOMException: DOMException): void { }

  /**
   * Procesa los errores cuando una operación no es terminada o un parámetro de alguna función es incorrecta.
   * @param typeError El error 
   */
  private erroresType(typeError: TypeError): void { }

  /**
   * Procesa los errores generales.
   * @param error El error genérico
   */
  private erroresErr(error: Error): void {
    this.detalle = error.message;
    if (error.message.includes('does not exist in container')) {
      this.errorMesage = HostRediError.MODULOEXPUESTO;
    }
  }

  /**
   * Procesa los errores generados por el usuario.
   * @param e El error especificado por el usuario 
   */
  private erroresString(e: string): void {
    this.detalle = e;
    switch (e.toUpperCase()) {
      case 'NO-COMPONENTE': {
        this.errorMesage = HostRediError.COMPONENTEDESCONOCIDO;
        break;
      }
      case 'NO-MODULO': {
        this.errorMesage = HostRediError.MODULODESCONOCIDO;
        break;
      }
    }
  }

}

