import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  myData: Array<any>;
  regex = '\d+(?=\/)';
  reg: RegExp = new RegExp('\d+(?=\/)');
  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);
  }
  ngOnInit() {
  }
  public ChangeSize( url: string, num: number)
  {
    return url.replace('600', num.toString());
  }

}
