import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public currentCount = 0;
  isActive = false;

  observable: Observable<number>;
  
  constructor() {
    this.observable = this.getObservable();
   }

  ngOnInit() {
  }
  public incrementCounter() {
    this.currentCount++;
    this.isActive = true;
  }
  public decrementCounter() {

    if (this.currentCount > 0) {
      this.currentCount--;
      if (this.currentCount === 0) {
        this.isActive = false;
      }
    }
  }
  getObservable() {
    return Observable
      .interval(1000)
      .take(10)
      .map((v) => v * v);
  }
}
