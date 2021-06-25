import { Component, Input, OnInit } from '@angular/core';
import Benefit from '../../model/benefit';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
  @Input() items!: Benefit[];

  constructor() {}

  ngOnInit(): void {}
}
