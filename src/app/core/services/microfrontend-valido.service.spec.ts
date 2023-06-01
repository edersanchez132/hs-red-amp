import { TestBed } from '@angular/core/testing';

import { MicrofrontendValidoService } from './microfrontend-valido.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

describe('MicrofrontendValidoService', () => {
  let service: MicrofrontendValidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(MicrofrontendValidoService);
  });

  it('Creando la instancia.', () => {
    expect(service).toBeTruthy();
  });

  it('Método esValido() > respuesta=200', async () => {
    const respuesta = await service.esValido('http://localhost:4205/remoteEntry.js');
    const respEsperada = 200;

    expect(respuesta).toEqual(respEsperada);
  });

  it('Método esValido() > respuesta=Error', async () => {
    await service.esValido('http://localhost:4205/remoteEntrys.js').catch((err) => {
      expect(err).toBeInstanceOf(HttpErrorResponse);
    });
  });
});
