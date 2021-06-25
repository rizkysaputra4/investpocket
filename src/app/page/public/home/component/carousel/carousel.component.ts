import { Component, Input, OnInit } from '@angular/core';
import CarouselImage from '../../model/main-carousel';
import { CarouselService } from '../../service/carousel/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  carouselImages!: CarouselImage[];

  constructor(private readonly carouselService: CarouselService) {
    this.carouselImages = carouselService.getContent();
  }

  ngOnInit(): void {}
}
