// custom-http-client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomHttpClientService {
  constructor(private httpClient: HttpClient) {}

  get(url: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Agrega cualquier otra configuración de encabezado según sea necesario
    });

    return this.httpClient.get(url, { headers });
  }

  post(url: string, data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // Agrega cualquier otra configuración de encabezado según sea necesario
    });

    return this.httpClient.post(url, data, { headers });
  }

  // Puedes agregar otros métodos HTTP según sea necesario
}
