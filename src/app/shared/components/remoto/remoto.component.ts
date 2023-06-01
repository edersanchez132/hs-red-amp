import { Component, Input, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { ConfiguracionMicrofrontend } from '../../../core/interfaces';
import { MicrofrontendHorizontalService } from '../../../core/services';
import { MicrofrontRemotoDirective } from '../../directives';

@Component({
  selector: 'app-remoto',
  templateUrl: './remoto.component.html',
  styleUrls: ['./remoto.component.scss'],
  providers: [MicrofrontendHorizontalService]
})
export class RemotoComponent {
  /**
   * Establece la directiva para obtener el contenedor donde se cargará el microfrontend.
   */
  @ViewChild(MicrofrontRemotoDirective, { static: true }) microfrontRemotoDirective!: MicrofrontRemotoDirective;

  /**
   * Establece la configuración para obtener el microfrontend.
   */
  @Input('microfrontend') set microfrontend(value: ConfiguracionMicrofrontend | undefined) {
    if (value) {
      this.cargaMicrofrontend(value);
    }
  }

  constructor(private readonly microfrontendHorizontalService: MicrofrontendHorizontalService) { }

  /**
   * Método que se encarga de obtener y cargar el microfront especificado.
   * @param microfrontend Parámetro que establece la configuración para obtener el microfrontend.
   */
  async cargaMicrofrontend(microfrontend: ConfiguracionMicrofrontend) {
    return await 
    this.microfrontendHorizontalService
      .cargarMicrofrontend(microfrontend)
      .then((componente) => {
        this.microfrontRemotoDirective.viewContainerRef.createComponent(componente as never);
      }).catch(
        (nodiponible) => {
          this.microfrontRemotoDirective.viewContainerRef.createComponent(nodiponible.errorComponente, nodiponible.inject);
        }
      );
  }
}
