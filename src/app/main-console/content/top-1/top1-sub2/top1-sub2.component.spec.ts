import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top1Sub2Component } from './top1-sub2.component';

describe('Top1Sub2Component', () => {
  let component: Top1Sub2Component;
  let fixture: ComponentFixture<Top1Sub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top1Sub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top1Sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
