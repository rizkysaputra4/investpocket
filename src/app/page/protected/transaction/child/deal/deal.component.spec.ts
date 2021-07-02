import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Pocket } from '../../model/Pocket';
import { TransactionService } from '../../service/transaction.service';
import { TransactionComponent } from '../../transaction.component';

import { DealComponent } from './deal.component';

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

describe('DealComponent', () => {
  let component: DealComponent;
  let fixture: ComponentFixture<DealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealComponent],
      imports: [RouterModule.forRoot(routes), HttpClientModule],
      providers: [TransactionService],
    }).compileComponents();

    fixture = TestBed.createComponent(DealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    tick(500);
    expect(component).toBeTruthy();
  }));

  let pocket: Pocket = {
    id: '2',
    name: 'aaaa',
    price: -34020000,
    productId: 'gold',
    qty: -42,
  };

  it('should save data', () => {
    component.deal = new FormGroup({
      qty: new FormControl(10),
      type: new FormControl('buy'),
      product: new FormControl('gold'),
    });

    component.changeClickedPocket(pocket);

    component.onSubmit();

    pocket.qty += component.deal.value.qty;
    expect(component.clickedPocketData).toBe(pocket);
  });
});
