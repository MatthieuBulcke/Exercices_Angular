import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaTabsComponent } from './ea-tabs.component';

describe('EaTabsComponent', () => {
  let component: EaTabsComponent;
  let fixture: ComponentFixture<EaTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
