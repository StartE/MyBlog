import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3Sub1Component } from './top3-sub1.component';

describe('Top3Sub1Component', () => {
  let component: Top3Sub1Component;
  let fixture: ComponentFixture<Top3Sub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top3Sub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top3Sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
