import { Jsonp } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistTrackList',
  templateUrl: './artistTrackList.component.html',
  styleUrls: ['./artistTrackList.component.scss']
})
export class ArtistTrackListComponent implements OnInit {
  private tracks: any[];
  constructor(private jsonp: Jsonp, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song&callback=JSONP_CALLBACK`)
          .toPromise()
          .then(res => {
            console.log(res.json());
            this.tracks = res.json().results.slice(1);
          });
    });
  }

  ngOnInit() {
  }

}
