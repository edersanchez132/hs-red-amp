import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMicroComponent } from './layout-micro.component';
import { RouterModule } from '@angular/router';

describe('LayoutMicroComponent', () => {
  let component: LayoutMicroComponent;
  let fixture: ComponentFixture<LayoutMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule],
      declarations: [ LayoutMicroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
