import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Pocket } from '../model/Pocket';

import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TransactionService],
    });
    service = TestBed.inject(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('deletePocket', () => {
    it('should return an Obs<User>', () => {
      service.deletePocket('1').subscribe((response) => {
        expect(response).toBeTruthy();
      });
    });
  });

  describe('addPocket', () => {
    it('should return an Obs<User>', () => {
      const mock: Pocket = {
        id: '',
        name: 'nikah',
        price: 810000,
        productId: 'gold',
        qty: 1,
      };

      service.addPocket(mock).subscribe((response) => {
        expect(response.productId).toBe('gold');
      });
    });
  });

  describe('getPriceList', () => {
    it('should return 0', () => {
      service.getPriceList('1').subscribe((response) => {
        expect(response.length).toBe(0);
      });
    });

    it('should return many', () => {
      service.getPriceList('gold').subscribe((response) => {
        expect(response.length).toBeTruthy;
      });
    });
  });

  describe('UpdatePocket', () => {
    it('should return an Obs<User>', () => {
      const mock: Pocket = {
        id: '',
        name: 'nikah',
        price: 810000,
        productId: 'silver',
        qty: 1,
      };

      service.updatePocket(mock).subscribe((response) => {
        expect(response.productId).toBe('silver');
      });
    });
  });
});
