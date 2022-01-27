import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaCardComponent } from './ea-card.component';

describe('EaCardComponent', () => {
  let component: EaCardComponent;
  let fixture: ComponentFixture<EaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
