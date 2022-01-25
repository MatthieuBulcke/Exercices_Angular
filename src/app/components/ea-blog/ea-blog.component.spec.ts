import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaBlogComponent } from './ea-blog.component';

describe('EaBlogComponent', () => {
  let component: EaBlogComponent;
  let fixture: ComponentFixture<EaBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
