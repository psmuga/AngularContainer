import { ActivatedRoute } from '@angular/router';
import { Jsonp } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artistAlbumList',
  templateUrl: './artistAlbumList.component.html',
  styleUrls: ['./artistAlbumList.component.scss']
})
export class ArtistAlbumListComponent implements OnInit {
  private albums: any[];
  constructor(private jsonp: Jsonp, private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.jsonp.request(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album&callback=JSONP_CALLBACK`)
          .toPromise()
          .then(res => {
            console.log(res.json());
            this.albums = res.json().results.slice(1);
          });
    });
  }

  ngOnInit() {
  }

}
