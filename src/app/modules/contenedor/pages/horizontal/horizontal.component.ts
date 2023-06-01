import { AfterViewInit, Component } from '@angular/core';
import { ConfiguracionMicrofrontend } from '../../../../core/interfaces';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent implements AfterViewInit {

  busqueda: ConfiguracionMicrofrontend | undefined;
  busquedaDos: ConfiguracionMicrofrontend | undefined;

  ngAfterViewInit(): void {
    this.load();
  }
  async load(): Promise<void> {
    const urlRemoteEntry = 'http://localhost:4205/remoteEntry.js';

    Promise.resolve().then(() => {

      this.busqueda = {
        type: 'module',
        remoteEntry: urlRemoteEntry,
        exposedModule: './Component',
        nombreComponente: 'BusquedaComponent'
      };
      this.busquedaDos = {
        type: 'module',
        remoteEntry: urlRemoteEntry,
        exposedModule: 'Widget',
        nombreComponente: 'WidgetComponent'
      };
    });
  }
}
