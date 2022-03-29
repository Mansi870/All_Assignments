import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  imgUrl = './assets/R.jpg';
  imgUrl1 = './assets/l.jpg';
  imgUrl2 = './assets/OIP.jpg';
}
