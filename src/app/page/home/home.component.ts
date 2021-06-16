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
    this.initReasons();
    this.initCarouselImages();
    this.initProduct();
  }

  ngOnInit(): void {}

  initReasons() {
    let result: Benefit[] = [
      new Benefit(
        'Delivery',
        'We have delivery service to alll city in Indonesia'
      ),
      new Benefit(
        'Legality',
        'We commit to keep your trusted with legality transactions.'
      ),
      new Benefit('Price', 'Good quality with the best prices'),
      new Benefit('Reward', 'More transaction more point and reward'),
      new Benefit('Transaction', 'Our transaction is simple and secure'),
      new Benefit('Brand', 'Our product is the best on quality and brand'),
    ];

    this.items = result;
  }

  initCarouselImages() {
    let images = [
      new CarouselImage(
        'image 1',
        'Invest your assets and wealth in Gold',
        'carousel-1.png'
      ),
      new CarouselImage(
        'image 2',
        'Invest your assets and wealth in Silver',
        'carousel-2.png'
      ),
      new CarouselImage(
        'image 3',
        'Invest your assets and wealth in Platinum',
        'carousel-3.png'
      ),
    ];
    this.carouselImages = images;
  }

  initProduct() {
    let product = [
      new Product('Platinum Investment', '1.png'),
      new Product('Gold Investment', '2.png'),
      new Product('Silver Investment', '3.png'),
    ];
    this.products = product;
  }
}
