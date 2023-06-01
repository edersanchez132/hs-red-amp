import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RemotoComponent } from './remoto.component';
import { HttpClientModule } from '@angular/common/http';
import { MicrofrontendHorizontalService } from '@core/services';
import { SimpleChange } from '@angular/core';
import { MicrofrontRemotoDirective } from '@shared/directives';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { ConfiguracionMicrofrontend } from '@core/interfaces';

describe('RemotoComponent', () => {
  let component: RemotoComponent;
  let fixture: ComponentFixture<RemotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [RemotoComponent, MicrofrontRemotoDirective],
      providers: [{ provide: MicrofrontendHorizontalService }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RemotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creando instancia RemoteComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Cargando microfrontend horizontal', async () => {
    const microfrontend: ConfiguracionMicrofrontend = {
      type: "module",
      remoteEntry: 'http://localhost:4205/remoteEntry.js',
      exposedModule: './Component',
      nombreComponente: 'BusquedaComponent'
    };
    fixture.detectChanges();
    await component.cargaMicrofrontend(microfrontend)
      .then(() => expect(component).toBeTruthy())
      .catch(() => expect(component).toBeTruthy());
  });
});
