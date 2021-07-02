import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PocketNamePipe } from '../../pipe/pocket-name.pipe';
import { PricePocketPipe } from '../../pipe/price-pocket.pipe';
import { routes } from '../../transaction-routing.module';

import { ProfileStatusComponent } from './profile-status.component';

describe('ProfileStatusComponent', () => {
  let component: ProfileStatusComponent;
  let fixture: ComponentFixture<ProfileStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileStatusComponent, PricePocketPipe, PocketNamePipe],
      imports: [RouterModule.forRoot(routes), HttpClientModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
