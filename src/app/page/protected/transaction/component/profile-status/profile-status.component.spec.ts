import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { from, Observable } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { Pocket } from '../../model/Pocket';
import { PocketNamePipe } from '../../pipe/pocket-name.pipe';
import { PricePocketPipe } from '../../pipe/price-pocket.pipe';
import { TransactionService } from '../../service/transaction.service';
import { routes } from '../../transaction-routing.module';

import { ProfileStatusComponent } from './profile-status.component';

describe('ProfileStatusComponent', () => {
  let component: ProfileStatusComponent;
  let fixture: ComponentFixture<ProfileStatusComponent>;
  let transactionService: TransactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileStatusComponent, PricePocketPipe, PocketNamePipe],
      imports: [RouterModule.forRoot(routes), HttpClientModule, SharedModule],
      providers: [TransactionService],
    }).compileComponents();
  });

  beforeEach(() => {
    transactionService = TestBed.inject(TransactionService);
    fixture = TestBed.createComponent(ProfileStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
});
