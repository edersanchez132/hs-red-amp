import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  private readonly longitud = 5;
  
  bienvenido = 'BIENVENIDO';
  numbers = Array(this.longitud).fill(0).map((x, i) => {
    return `Opción ${i}`;
  });
}
