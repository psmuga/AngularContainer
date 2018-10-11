import { Component, OnInit, ViewChild } from '@angular/core';
import {Address} from '../../address';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  address = new Address();
  @ViewChild('myForm') form: any;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.form.valid) {
      alert('Thanks for submitting! Data: ' + JSON.stringify(this.address));
      this.form.reset();
    }
  }
}
