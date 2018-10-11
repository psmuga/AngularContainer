import { Component, OnInit, } from '@angular/core';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  dateVal = new Date();
  duration= 5000;
  jsonVal = { moo: 'foo', goo: { too: 'new' }};

  constructor(public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }
  openSnackbar()
  {
    // this.snackBar.open("This is snack bar message", "Got it!");
   this.snackBar.open('This is snack bar message', 'Got it!', {duration: this.duration});
  }
}
