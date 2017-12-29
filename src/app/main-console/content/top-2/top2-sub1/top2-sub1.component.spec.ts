import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2Sub1Component } from './top2-sub1.component';

describe('Top2Sub1Component', () => {
  let component: Top2Sub1Component;
  let fixture: ComponentFixture<Top2Sub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top2Sub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top2Sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
