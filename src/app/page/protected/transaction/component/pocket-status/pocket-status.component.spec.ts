import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocketStatusComponent } from './pocket-status.component';

describe('PocketStatusComponent', () => {
  let component: PocketStatusComponent;
  let fixture: ComponentFixture<PocketStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PocketStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PocketStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
