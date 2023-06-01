import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private readonly http: HttpClient) { }

  get googleHead() {
    return this.http.head(`${environment.googleUrl}`);
  }
}
