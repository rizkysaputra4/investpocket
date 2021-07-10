import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { DealComponent } from '../../child/deal/deal.component';
import { TransactionRoutingModule } from '../../transaction-routing.module';
import { TransactionComponent } from '../../transaction.component';

import { BuySellComponent } from './buy-sell.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionComponent,
  },
  {
    path: ':productId',
    component: TransactionComponent,
  },
  {
    path: ':productId/deal',
    component: DealComponent,
  },
];

describe('BuySellComponent', () => {
  let component: BuySellComponent;
  let fixture: ComponentFixture<BuySellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuySellComponent],
      imports: [RouterModule.forRoot(routes)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
