import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaCryptoComponent } from './ea-crypto.component';

describe('EaCryptoComponent', () => {
  let component: EaCryptoComponent;
  let fixture: ComponentFixture<EaCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
