import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaSlideShowComponent } from './ea-slide-show.component';

describe('EaSlideShowComponent', () => {
  let component: EaSlideShowComponent;
  let fixture: ComponentFixture<EaSlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaSlideShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
