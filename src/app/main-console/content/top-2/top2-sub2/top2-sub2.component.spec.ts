import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2Sub2Component } from './top2-sub2.component';

describe('Top2Sub2Component', () => {
  let component: Top2Sub2Component;
  let fixture: ComponentFixture<Top2Sub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top2Sub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top2Sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
