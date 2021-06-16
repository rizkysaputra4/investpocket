import { Component, Input, OnInit } from '@angular/core';
import Benefit from '../../model/benefit';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  @Input() items!: Benefit[];

  constructor() {}

  ngOnInit(): void {}
}
