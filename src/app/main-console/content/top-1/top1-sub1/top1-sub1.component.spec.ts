import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top1Sub1Component } from './top1-sub1.component';

describe('Top1Sub1Component', () => {
  let component: Top1Sub1Component;
  let fixture: ComponentFixture<Top1Sub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top1Sub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top1Sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
