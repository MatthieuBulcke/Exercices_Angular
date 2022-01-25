import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaBlogArticlesComponent } from './ea-blog-articles.component';

describe('EaBlogArticlesComponent', () => {
  let component: EaBlogArticlesComponent;
  let fixture: ComponentFixture<EaBlogArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaBlogArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EaBlogArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
