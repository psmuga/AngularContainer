import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private moves(event: MouseEvent): void {
    const wrapper = document.getElementById('wrapper');
    const topLayer = wrapper.querySelector('.top');
    const handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;
    if (wrapper.className.indexOf('skewed') !== -1){
      skew = 1000;
    }
    wrapper.addEventListener('mousemove', function(e){
      delta = (e.clientX - window.innerWidth / 2) * 0.5;
      const l = e.clientX + delta + 'px';
      const w = e.clientX + skew + delta + 'px';
      handle.setAttribute('style', `left: ${l};`);
      topLayer.setAttribute('style', `width:${w}`);
    });
  }
}
