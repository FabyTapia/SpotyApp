import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent{

newSongs: any[] = [];

  constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases()
    .subscribe((data: any)=>{
    console.log(data.albums.items);
    this.newSongs = data.albums.items; 
    });
  }
    

}

