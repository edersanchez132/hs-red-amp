import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDisponibleComponent } from './no-disponible.component';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MicrofrontendVerticalService } from '@core/services';
import { MatIconModule } from '@angular/material/icon';

describe('NoDisponibleComponent', () => {
  let component: NoDisponibleComponent;
  let fixture: ComponentFixture<NoDisponibleComponent>;

  beforeEach(async () => {
    const mfServiceStub = {
      error: ''
    };
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule, MatIconModule],
      declarations: [NoDisponibleComponent],
      providers: [{ provide: MicrofrontendVerticalService, useValue: mfServiceStub }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoDisponibleComponent);
    component = fixture.componentInstance;
  });

  it('Crear instancia correctamente.', () => {
    expect(component).toBeTruthy();
  });

  it('Valor de error "NO-COMPONENTE"', () => {
    component.error = 'NO-COMPONENTE';
    component.configurarError();
    fixture.detectChanges();
    const codigo = fixture.nativeElement.querySelector('#codigo').textContent;
    expect(codigo).toEqual('MF-IMFR004');
  });

  it('Valor de error "NO-MODULO"', () => {
    component.error = 'NO-MODULO';
    component.configurarError();
    fixture.detectChanges();
    const codigo = fixture.nativeElement.querySelector('#codigo').textContent;
    expect(codigo).toEqual('MF-IMFR003');
  });

  it('Valor de error "HttpErrorResponse" > Error desconocido', () => {
    component.error = new HttpErrorResponse({ error: 'desconocido', status: 0 });
    component.configurarError();
    fixture.detectChanges();
    const codigo = fixture.nativeElement.querySelector('#codigo').textContent;
    expect(codigo).toEqual('MF-IMFR000');
  });

  it('Valor de error "HttpErrorResponse" > No encontrado', () => {
    component.error = new HttpErrorResponse({ error: 'NO ENCONTRADO', status: 404 });
    component.configurarError();
    fixture.detectChanges();
    const codigo = fixture.nativeElement.querySelector('#codigo').textContent;
    expect(codigo).toEqual('MF-IMFR404');
  });

  it('Valor de error "HttpErrorResponse" > Error servidor', () => {
    component.error = new HttpErrorResponse({ error: 'ERROR SERVIDOR', status: 500 });
    component.configurarError();
    fixture.detectChanges();
    const codigo = fixture.nativeElement.querySelector('#codigo').textContent;
    expect(codigo).toEqual('MF-IMFR500');
  });

  it('Valor de error "DOMException"', () => {
    component.error = new DOMException('Test DOMException');
    component.configurarError();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Valor de error "TypeError"', () => {
    component.error = new TypeError('Test TypeError');
    component.configurarError();
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  
  it('Valor de error "Error"', () => {
    component.error = new Error('does not exist in container');
    component.configurarError();
    fixture.detectChanges();
    const codigo = fixture.nativeElement.querySelector('#codigo').textContent;
    expect(codigo).toEqual('MF-IMFR001');
  });
});
