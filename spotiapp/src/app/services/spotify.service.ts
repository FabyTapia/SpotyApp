import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'//forma automatica de importar servicio
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBUWD6NSlQ9BHFj-WSbGLDDkZUxnx4w5f9wcuDy7jr9178YnyxPvO4RvWKuAJmb9f1ZIClkdd7g6WJemk8'

    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
    
    }

  }