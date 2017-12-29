import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3Sub2Component } from './top3-sub2.component';

describe('Top3Sub2Component', () => {
  let component: Top3Sub2Component;
  let fixture: ComponentFixture<Top3Sub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top3Sub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top3Sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
