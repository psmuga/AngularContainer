import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  name = 'Container';
  // show = false;
  constructor() { }

  ngOnInit() {
  }
  // clicked(event) {

  //   event.target.classList.toggle('open'); // To toggle
  //   this.changeShow();
  // }
  // changeShow() {
  //   this.show = !this.show;
  // }
}
