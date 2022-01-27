import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaColorsComponent } from './ea-colors.component';

describe('EaColorsComponent', () => {
  let component: EaColorsComponent;
  let fixture: ComponentFixture<EaColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
