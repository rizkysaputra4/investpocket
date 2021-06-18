import { Component, Input, OnInit } from '@angular/core';
import Benefit from '../../model/benefit';
import { BenefitService } from '../../service/benefit/benefit.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  items!: Benefit[];

  constructor(private readonly benefitService: BenefitService) {
    this.items = benefitService.getBenefit();
  }

  ngOnInit(): void {}

  isDifferentSection(i: number): boolean {
    if (i != 0) {
      if (this.items[i].type !== this.items[i - 1].type) {
        return true;
      }
    }

    return false;
  }
}
