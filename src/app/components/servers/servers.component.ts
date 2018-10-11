import { Component, OnInit } from '@angular/core';
import { Joke } from '../../joke';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  jokes: Joke[];







  constructor() {
    this.jokes = [
      new Joke('Gdzie jest najwięcej wolnego miejsca w akademiku?', 'W lodówce.'),
      new Joke('Ty start, rozmawiasz z żoną po stosunku?', 'Jak zadzwoni to czemu nie!?'),
      new Joke('Jak nazywa się mężczyzna po ślubie?', 'Obiekt monitorowany.')
    ]
    setTimeout(() => {
      this.allowNewServer = true;
    }, 10);
   }

  ngOnInit() {
  }
  getColor(joke) {
    return joke.hide === false ? '#E4B363' : '#737373';
  }
  addJoke(joke) {
    this.jokes.unshift(joke);
  }
  deleteJoke(joke) {
    const indexToDelete = this.jokes.indexOf(joke);
    if (indexToDelete !== -1) {
      this.jokes.splice(indexToDelete, 1);
    }
  }
}

