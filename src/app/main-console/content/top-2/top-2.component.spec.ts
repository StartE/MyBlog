import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2Component } from './top-2.component';

describe('Top2Component', () => {
  let component: Top2Component;
  let fixture: ComponentFixture<Top2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
