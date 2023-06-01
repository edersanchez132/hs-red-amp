import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarraCargaService {

  /**
   * Observable que obtiene y establece los valores para la visibilidad del compomente.
   */
  private readonly subject: Subject<boolean> = new Subject<boolean>();

  /**
   * Observable que obtiene o establece la visibilidad del componente.
   */
  cargando$: Observable<boolean> = this.subject.asObservable();

  /**
   * Obtiene o establece si la barra se muestra o no.
   */
  activarBarrCarga = true;

  /**
   * Muestra la barra de carga
   */
  mostrarCarga() {
    if (this.activarBarrCarga) {
      this.subject.next(true);
    }
  }

  /**
   * Oculta la barra de carga
   */
  ocultarCarga(): void {
    this.subject.next(false);
  }

}
