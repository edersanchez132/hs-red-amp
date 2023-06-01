import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInicioComponent } from './layout-inicio.component';
import { ContenedorModule } from '@modules/contenedor/contenedor.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LayoutInicioComponent', () => {
  let component: LayoutInicioComponent;
  let fixture: ComponentFixture<LayoutInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorModule,HttpClientModule,RouterTestingModule],
      declarations: [LayoutInicioComponent],
      providers:[HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LayoutInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
