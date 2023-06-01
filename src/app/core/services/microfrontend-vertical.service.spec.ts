import { TestBed } from '@angular/core/testing';

import { MicrofrontendVerticalService } from './microfrontend-vertical.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MicrofrontendVerticalService', () => {
  let service: MicrofrontendVerticalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(MicrofrontendVerticalService);
  });

  it('Creando instancia', () => {
    expect(service).toBeTruthy();
  });

  it('Método cargarMicrofrontend', async () => {
    await service.cargarMicrofrontend({
      type: 'module',
      remoteEntry: ' http://localhost:4205/remoteEntry.js',
      exposedModule: 'Busqueda',
      nombreModulo: 'MicrofrontBusquedaModule'
    }).then(microfrontend => {
      expect(microfrontend).toBeDefined();
    });
  });

  it('Método cargarMicrofrontend > url-no-válido', async () => {
    await service.cargarMicrofrontend({
      type: 'module',
      remoteEntry: ' http://localhost:4205/remoteEntry.jss',
      exposedModule: 'Busqueda',
      nombreModulo: 'MicrofrontBusquedaModule'
    }).catch((err) => {
      expect(err).toBeTruthy();
    });
  });

  it('Método cargarMicrofrontend > exposedModule-no-válido', async () => {
    await service.cargarMicrofrontend({
      type: 'module',
      remoteEntry: ' http://localhost:4205/remoteEntry.js',
      exposedModule: 'Busquedas',
      nombreModulo: 'MicrofrontBusquedaModule'
    }).catch((err) => {
      expect(err).toBeTruthy();
    });
  });

  it('Método cargarMicrofrontend > nombreModulo-no-válido', async () => {
    await service.cargarMicrofrontend({
      type: 'module',
      remoteEntry: ' http://localhost:4205/remoteEntry.js',
      exposedModule: 'Busqueda',
      nombreModulo: 'MicrofrontBusquedaModules'
    }).catch((err) => {
      expect(err).toBeTruthy();
    });
  });


});
