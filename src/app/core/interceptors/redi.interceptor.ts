import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { StorageService, BarraCargaService } from '../../core/services';

@Injectable()
export class RediInterceptor implements HttpInterceptor {

  constructor(
    private readonly storageServicio: StorageService,
    private readonly barraCargaServicio: BarraCargaService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let respuesta: Observable<HttpEvent<unknown>>;
    this.barraCargaServicio.mostrarCarga();

    if (request.headers.get('Authorization')) {
      respuesta = next.handle(request);
    } else {
      if (this.storageServicio.existeAuth) {
        respuesta = this.verificarTipoToken(request, next);
      }
      else { respuesta = next.handle(request); }
    }
    return respuesta.pipe(finalize(() => {
      this.barraCargaServicio.ocultarCarga();
    }));
  }

  /**
   * Método para verificar el tipo de token que se establecerá en la petición
   * @param request 
   * @param next 
   * @returns Un observable con la respuesta del servidor.
   */
  private verificarTipoToken(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tipoToken = (this.storageServicio.obtenerValor('token_type') as string).toUpperCase();
    let encabezadoAuth = '';

    switch (tipoToken) {
      case 'BEARERTOKEN': {
        encabezadoAuth = `Bearer ${this.storageServicio.obtenerValor('access_token')}`;
        break;
      }
      case 'BASICTOKEN': {
        encabezadoAuth = `Basic ${this.storageServicio.obtenerValor('access_token')}`;
        break;
      }
    }
    const secureReq = request.clone({
      headers: request.headers.set('Authorization', encabezadoAuth)
    });
    return next.handle(secureReq);
  }
}
