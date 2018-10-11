import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('joke') data: Joke;
  @Output() jokeDeleted = new EventEmitter<Joke>();
  
  deleteJoke() {
    this.jokeDeleted.emit(this.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
