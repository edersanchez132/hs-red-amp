import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoEncontradoComponent } from './no-encontrado.component';
import { MatIconModule } from '@angular/material/icon';

describe('NoEncontradoComponent', () => {
  let component: NoEncontradoComponent;
  let fixture: ComponentFixture<NoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatIconModule],
      declarations: [ NoEncontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
