import { Component } from '@angular/core';
import { BarraCargaService } from '../../../core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-barra-carga',
  templateUrl: './barra-carga.component.html',
  styleUrls: ['./barra-carga.component.scss']
})
export class BarraCargaComponent {

  /**
   * Observable que obtiene o establece la visibilidad de la barra de carga.
   */
  cargando$!: Observable<boolean>;

  /**
   * Constructor del componente, que muestra la barra de carga la cual aparecerá cada que se realice una petición http.
   * @param barraCargaServicio Servicio que activa o desactiva la visualización de la barrar de carga.
   */
  constructor(protected barraCargaServicio: BarraCargaService) {
    this.cargando$ = barraCargaServicio.cargando$;
  }
}
