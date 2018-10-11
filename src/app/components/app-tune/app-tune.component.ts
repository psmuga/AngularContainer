import { FormControl } from '@angular/forms';
import {SearchItem} from '../../core/searchitem';
import { SearchService } from './../../services/SearchService';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { Router, ActivatedRoute } from '@angular/router';

// https://codecraft.tv/courses/angular/http/http-with-promises/
@Component({
  selector: 'app-tune',
  templateUrl: './app-tune.component.html',
  styleUrls: ['./app-tune.component.scss'],
})
export class AppTuneComponent implements OnInit {
  private loading = false;
  // private results: SearchItem[];
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;
  private help = '';
  constructor(private itunes: SearchService, private router: Router, private route: ActivatedRoute, private cd: ChangeDetectorRef) {
    this.route.params.subscribe( params => {
      if (params['term']) {
        this.help = params['term'];
        //automat ponizsze zakomentowac
        this.doSearch(this.help);
      }
    });
  }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.setValue(this.help);

   //automat
    // this.search();
  }
  ngOnDestroy(){
    this.itunes.clear();
  }

  search() {
    this.cd.reattach();
    this.results = this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .do(term => this.onSearch(term))
      .do( () => this.loading = true)
      .switchMap( term => this.itunes.search2(term))
      .do( () => this.loading = false );
  }


  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false);
  }

  doSearch2(term: string) {
    this.itunes.search2(term);
  }
  goHome() {
    this.router.navigate(['']);

  }
  goTune() {
    this.router.navigate(['tune']);
  }
  onSearch(term: string) {
    this.router.navigate(['tune', {term: term}]);
  }
}
