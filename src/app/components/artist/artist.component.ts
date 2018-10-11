import { ActivatedRoute } from '@angular/router';
import { Jsonp } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  private artist: any;
  constructor(private jsonp: Jsonp, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&callback=JSONP_CALLBACK`)
          .toPromise()
          .then(res => {
            console.log(res.json());
            this.artist = res.json().results[0];
            console.log(this.artist);
          });
    });
  }

  ngOnInit() {
  }

}
