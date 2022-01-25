import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaBlogFormComponent } from './ea-blog-form.component';

describe('EaBlogFormComponent', () => {
  let component: EaBlogFormComponent;
  let fixture: ComponentFixture<EaBlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaBlogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
