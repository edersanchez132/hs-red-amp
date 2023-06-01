import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class MicrofrontendValidoService {

  /**
   * Constructor del servicio para validar si el microfrontend se encuentra disponible.
   * @param http Servicio de angular para realizar peticiones http.
   */
  constructor(private readonly http: HttpClient) { }

  /**
   * Método para validar la disponibilidad del microfrontend, realiza un petición head para validar.
   * @param urlMicrofrontEnd La url del microfrontend a cargar.
   * @returns Promesa con el código http obtenido, 200 para un éxito, en caso contrario retorna objeto con error.
   */
  esValido(urlMicrofrontEnd: string) {
    return new Promise((resolve, reject) => {
      this.http.head(urlMicrofrontEnd, { observe: 'response' }).subscribe({
        next: (respuesta) => resolve(respuesta.status),
        error: (error) => reject(error)
      });
    });
  }
}
