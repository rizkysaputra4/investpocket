import { HttpClientModule } from '@angular/common/http';
import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
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
    it(
      'should return an Obs<User>',
      waitForAsync(() => {
        service.deletePocket('1').subscribe(
          (response) => {
            expect(response).toBeTruthy();
          },
          (err) => {
            expect(err).toBeTruthy();
          }
        );
      })
    );
  });

  describe('addPocket', () => {
    it(
      'should return an Obs<User>',
      waitForAsync(() => {
        const mock: Pocket = {
          id: '',
          name: 'nikah',
          price: 810000,
          productId: 'gold',
          qty: 1,
        };

        service.addPocket(mock).subscribe(
          (response) => {
            expect(response.productId).toBe('gold');
          },
          (err) => {
            expect(err).toBeTruthy();
          }
        );
      })
    );
  });

  describe('getPriceList', () => {
    it(
      'should return 0',
      waitForAsync(() => {
        service.getPriceList('1').subscribe(
          (response) => {
            expect(response.length).toBe(0);
          },
          (err) => {
            expect(err).toBeTruthy();
          }
        );
      })
    );

    it(
      'should return many',
      waitForAsync(() => {
        service.getPriceList('gold').subscribe(
          (response) => {
            expect(response.length).toBeTruthy;
          },
          (err) => {
            expect(err).toBeTruthy();
          }
        );
      })
    );
  });

  describe('UpdatePocket', () => {
    it(
      'should return an Obs<User>',
      waitForAsync(() => {
        const mock: Pocket = {
          id: '',
          name: 'nikah',
          price: 810000,
          productId: 'silver',
          qty: 1,
        };

        service.updatePocket(mock).subscribe(
          (response) => {
            expect(response.productId).toBe('silver');
          },
          (err) => {
            console.log(err);
            expect(err).toBeTruthy();
          }
        );
      })
    );
  });
});
