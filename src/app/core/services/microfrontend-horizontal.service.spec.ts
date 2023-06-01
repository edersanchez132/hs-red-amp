import { TestBed } from '@angular/core/testing';

import { MicrofrontendHorizontalService } from './microfrontend-horizontal.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('MicrofrontendHorizontalService', () => {
  let service: MicrofrontendHorizontalService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(MicrofrontendHorizontalService);
  });

  it('Creando instancia', () => {
    expect(service).toBeTruthy();
  });


  it('Método cargarMicrofrontend', async () => {
    await service.cargarMicrofrontend({
      type: 'module',
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      exposedModule: './Component',
      nombreComponente: 'BusquedaComponent'
    }).then(o => {
      expect(o).toBeDefined();
    });
  });

  it('Método cargarMicrofrontend > url-no-válido', async () => {
    await service.cargarMicrofrontend({
      type: 'module',
      remoteEntry: 'http://localhost:4205/remoteEntry.jss',
      exposedModule: './Component',
      nombreComponente: 'BusquedaComponent'
    }).catch(o => {
      expect(o).toBeDefined();
    });
  });

  it('Método cargarMicrofrontend > exposedModule-no-válido', async () => {
    await service.cargarMicrofrontend({
      type: 'module',
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      exposedModule: './Components',
      nombreComponente: 'BusquedaComponent'
    }).catch(o => {
      expect(o).toBeDefined();
    });
  });


  it('Método cargarMicrofrontend > nombreComponente-no-válido', async () => {
    await service.cargarMicrofrontend({
      type: 'module',
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      exposedModule: './Component',
      nombreComponente: 'BusquedaComponentk'
    }).catch(o => {
      expect(o).toBeDefined();
    });
  });
});

