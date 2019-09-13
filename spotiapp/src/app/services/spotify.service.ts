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
      'Authorization':'Bearer BQCW4nOz4wUMW7C8UpQQmZIJ7-qE12RnbiIr_8GbD2qW3LAOMlwkW-YHaJGaJ2jbPSYWzliG2pLhACt4ebQ'

    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
    
    }

    getArtist( termino: string){

      const headers = new HttpHeaders({
        'Authorization':'Bearer BQCW4nOz4wUMW7C8UpQQmZIJ7-qE12RnbiIr_8GbD2qW3LAOMlwkW-YHaJGaJ2jbPSYWzliG2pLhACt4ebQ'
  
      });
  
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers} );
      
      }
    }

  