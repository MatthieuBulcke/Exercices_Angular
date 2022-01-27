import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaPanelComponent } from './ea-panel.component';

describe('EaPanelComponent', () => {
  let component: EaPanelComponent;
  let fixture: ComponentFixture<EaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
