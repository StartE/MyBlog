import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top0Component } from './top-0.component';

describe('Top0Component', () => {
  let component: Top0Component;
  let fixture: ComponentFixture<Top0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
