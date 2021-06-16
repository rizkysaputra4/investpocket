import { Component, Input, OnInit } from '@angular/core';
import CarouselImage from '../../model/main-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() carouselImages!: CarouselImage[];

  constructor() {}

  ngOnInit(): void {}
}
