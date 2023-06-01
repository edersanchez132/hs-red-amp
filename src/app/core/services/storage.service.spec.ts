import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('Creando instancia', () => {
    expect(service).toBeTruthy();
  });

  it('Método existeAuth', () => {
    const existe = service.existeAuth;
    expect(existe).toBeFalse();
  });

  it('Método obtenerValor > undefined', () => {
    const valor = service.obtenerValor('noexiste');
    expect(valor).toBeUndefined();
  });

  it('Método obtenerValor > existente', () => {
    service.guardarValor('auth', {
      campo_test: 'test_value'
    });
    const valor = service.obtenerValor('campo_test');
    service.limpiar();
    expect(valor).toEqual('test_value');
  });

  it('Método obtenerLlaves', () => {
    service.guardarValor('keys', {
      resultado: {}
    });
    const valor = service.obtenerLlaves();
    expect(valor).toBeDefined();
  });

});
