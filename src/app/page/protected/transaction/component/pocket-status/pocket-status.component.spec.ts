import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { from, Observable } from 'rxjs';
import { routes } from 'src/app/app-routing.module';
import { Pocket } from '../../model/Pocket';
import { TransactionService } from '../../service/transaction.service';

import { PocketStatusComponent } from './pocket-status.component';

describe('PocketStatusComponent', () => {
  let component: PocketStatusComponent;
  let fixture: ComponentFixture<PocketStatusComponent>;
  let transactionService: TransactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PocketStatusComponent],
      imports: [HttpClientModule, RouterTestingModule.withRoutes(routes)],
      providers: [TransactionService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketStatusComponent);
    component = fixture.componentInstance;
    transactionService = TestBed.inject(TransactionService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component.deletePocket).toBeTruthy();
  });

  it('should create', () => {
    expect(component.updatePocket).toBeTruthy();
  });
  it('should create', () => {
    let pocket: Pocket = {
      id: '8',
      name: 'nikah',
      price: 810000,
      productId: 'gold',
      qty: 1,
    };
    component.changeClickedPocketId(pocket);
    expect(component.clickedPocketData.name).toBe('nikah');
  });

  it('should submit', () => {
    component.ngOnInit();
    component.pocket = new FormGroup({
      name: new FormControl('nikah'),
      price: new FormControl(10000),
      qty: new FormControl(1),
    });
    let pocketLength: number = component.pocketList.length;
    let pockets: Pocket[] = component.pocketList;

    component.onSubmit();

    expect(component.pocketList.length).toBe(pocketLength + 1);
  });

  it('should get pocketList', () => {
    let pocketList: Pocket[] = [
      { name: '', price: 0, qty: 0, productId: '0', id: '0' },
    ];
    let spy = spyOn(transactionService, 'getPocketList').and.callFake(
      (): Observable<any> => {
        return from(pocketList);
      }
    );
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    // expect(pocketList).toBeTruthy()
  });

  it('should delete pocket', () => {
    let pocket: Pocket = {
      name: '',
      price: 0,
      qty: 0,
      productId: '0',
      id: '0',
    };
    let spy = spyOn(transactionService, 'deletePocket').and.callFake(
      (): Observable<any> => {
        return from([pocket]);
      }
    );
    component.deletePocket('1');
    expect(spy).toHaveBeenCalled();
  });

  it('should call UpdatePocket', () => {
    let pocket: Pocket = {
      name: '',
      price: 0,
      qty: 0,
      productId: '0',
      id: '0',
    };
    let spy = spyOn(transactionService, 'updatePocket').and.callFake(
      (): Observable<any> => {
        return from([pocket]);
      }
    );
    component.updatePocket();
    expect(spy).toHaveBeenCalled();
  });
});
