import { Component } from '@angular/core';
import { PruebasService } from './core/services/pruebas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'REDI';
  constructor() {
  }
}
