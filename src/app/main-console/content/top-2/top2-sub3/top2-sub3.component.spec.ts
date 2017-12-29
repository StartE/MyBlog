import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2Sub3Component } from './top2-sub3.component';

describe('Top2Sub3Component', () => {
  let component: Top2Sub3Component;
  let fixture: ComponentFixture<Top2Sub3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top2Sub3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top2Sub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
