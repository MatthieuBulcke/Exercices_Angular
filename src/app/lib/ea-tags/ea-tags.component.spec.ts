import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaTagsComponent } from './ea-tags.component';

describe('EaTagsComponent', () => {
  let component: EaTagsComponent;
  let fixture: ComponentFixture<EaTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
