import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-informacion',
  templateUrl: './usuario-informacion.component.html',
  styleUrls: ['./usuario-informacion.component.scss']
})
export class UsuarioInformacionComponent implements OnInit, OnDestroy {
  fechaHoy: number = Date.now();
  hora: number = Date.now();
  horaInterval: any | undefined;

  ngOnInit(): void {
    const time = 1000;
    this.horaInterval = setInterval(() => this.hora = Date.now(), time);
  }
  ngOnDestroy(): void {
    clearInterval(this.horaInterval);
  }
}
