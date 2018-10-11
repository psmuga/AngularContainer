import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {SearchItem} from '../core/searchitem';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import {JsonpModule, Jsonp, Response} from '@angular/http';
@Injectable()
export class SearchService {
  apiRoot = 'https://itunes.apple.com/search';
  results: SearchItem[];
  // loading: boolean;

  constructor(private http: Http, private jsonp: Jsonp) {
    this.results = [];
    // this.loading = false;
  }
  clear() {
    this.results.length = 0;
  }
  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
      this.jsonp.request(apiURL)
          .toPromise()
          .then(
              res => { // Success
                this.results = res.json().results.map(item => {
                  return new SearchItem(
                      item.trackName,
                      item.artistName,
                      item.trackViewUrl,
                      item.artworkUrl30,
                      item.artistId
                  );
                });
                resolve();
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
  }
  search2(term: string): Observable<SearchItem[]> {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
        .map(res => {
          return res.json().results.map(item => {
            return new SearchItem(
                item.trackName,
                item.artistName,
                item.trackViewUrl,
                item.artworkUrl30,
                item.artistId
            );
          });
        });
  }
}
