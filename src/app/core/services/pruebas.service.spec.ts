import { TestBed } from '@angular/core/testing';

import { PruebasService } from './pruebas.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PruebasService', () => {
  let service: PruebasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(PruebasService);
  });

  it('Creando instancia', () => {
    expect(service).toBeTruthy();
  });

  it('Método googleHead()', () => {
    const codigo = service.googleHead;
    expect(codigo).toBeDefined();
  });
});
