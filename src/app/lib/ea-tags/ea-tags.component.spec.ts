import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EaTagsComponent } from './ea-tags.component';

describe('EaTagsComponent', () => {
  let component: EaTagsComponent;
  let fixture: ComponentFixture<EaTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EaTagsComponent]
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
  it('should does not have any tags', () => {
    expect(component.tags.length).toBeGreaterThanOrEqual(0);
  })
  it('should add tag', () => {
    const input: DebugElement = fixture.debugElement.query(By.css('input'));

    expect(input).toBeTruthy();

    input.nativeElement.value = 'Tag 1';

    input.triggerEventHandler('keyup.enter', { target: input.nativeElement });

    fixture.detectChanges();

    spyOn(fixture.componentInstance, 'add');
    fixture.componentInstance.add(new Event('keyup.enter'));

    expect(component.tags.length).toBeGreaterThanOrEqual(1);

    expect(component.tags[0]).toEqual('Tag 1');
    expect(fixture.componentInstance.add).toHaveBeenCalled();
    expect(fixture.componentInstance.add).toHaveBeenCalledTimes(1);
  })
});
