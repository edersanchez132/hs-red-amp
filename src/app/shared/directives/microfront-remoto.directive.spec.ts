import { Component } from '@angular/core';
import { MicrofrontRemotoDirective } from './microfront-remoto.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  template: `
  <div appMicrofrontRemoto>El contenedor</div>`
})
class TestComponent { }


describe('MicrofrontRemotoDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [MicrofrontRemotoDirective, TestComponent]
    }).createComponent(TestComponent);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

});
