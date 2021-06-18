import { Injectable } from '@angular/core';
import CarouselImage from '../../model/main-carousel';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  images: CarouselImage[] = [];
  constructor() {
    this.images = this.initCarouselImages();
  }

  initCarouselImages(): CarouselImage[] {
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
    return images;
  }

  getContent(): CarouselImage[] {
    return this.images;
  }
}
