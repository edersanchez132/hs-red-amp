import { TestBed } from '@angular/core/testing';

import { BarraCargaService } from './barra-carga.service';

describe('BarraCargaService', () => {
  let service: BarraCargaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarraCargaService);
  });

  it('Creando instancia.', () => {
    expect(service).toBeTruthy();
  });

  it('Método mostrarCarga()', () => {
    service.activarBarrCarga=true;
    service.mostrarCarga();
    expect(service).toBeTruthy();
  });

  it('Método ocultarCarga()', () => {
    service.ocultarCarga();
    expect(service).toBeTruthy();
  });

});
