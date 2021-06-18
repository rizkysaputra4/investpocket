import { Component, Input, OnInit } from '@angular/core';
import CarouselImage from 'src/app/page/home/model/main-carousel';
import Product from './model/product';
import Benefit from './model/benefit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
