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
  items: Benefit[] = [];
  carouselImages: CarouselImage[] = [];
  products: Product[] = [];

  constructor() {
    this.initCarouselImages();
  }

  ngOnInit(): void {}

  initCarouselImages() {
    let images = [
      new CarouselImage(
        'image 1',
        'Invest your assets and wealth in Gold',
        'carousel-1.jpg'
      ),
      new CarouselImage(
        'image 2',
        'Invest your assets and wealth in Silver',
        'carousel-2.jpg'
      ),
      new CarouselImage(
        'image 3',
        'Invest your assets and wealth in Platinum',
        'carousel-3.jpg'
      ),
    ];
    this.carouselImages = images;
  }
}
