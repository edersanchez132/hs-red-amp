import { Injectable } from '@angular/core';
import { Llaves } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  /**
   * Método que establece una llave y valor en el localStorage.s
   * @param nombre Nombre del recurso para su acceso en el localStorage
   * @param valor Valora del recurso.
   */
  public guardarValor(nombre: string, valor: unknown): void {
    localStorage.setItem(nombre, window.btoa(JSON.stringify(valor)));
  }

  /**
   * Verifica si existe información de logeo.
   */
  public get existeAuth(): boolean {
    return this.oauth.length > 0;
  }

  /**
   * 
   * @param nombreCampo El nombre del campo
   * @returns El valor de la propiedad del objeto almacenado.
   */
  public obtenerValor(nombreCampo: string): unknown | undefined {
    const authStr = window.atob(this.oauth);
    if (authStr === '') {
      return undefined;
    }
    return JSON.parse(authStr)[nombreCampo];
  }

  /**
   * 
   * @returns Objeto con las llaves para encriptación
   */
  public obtenerLlaves(): Llaves {
    const llavesStr = window.atob(localStorage.getItem('keys') ?? '');
    return JSON.parse(llavesStr)['resultado'];
  }

  /**
   * Elimina el contenido del localStorage
   */
  public limpiar(): void {
    localStorage.clear();
  }

  /**
   * Obtiene los datos generados por el login, almacenados en el localStorage.
   */
  private get oauth(): string {
    return localStorage.getItem('auth') ?? '';
  }
}
