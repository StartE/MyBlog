import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top2HomeComponent } from './top2-home.component';

describe('Top2HomeComponent', () => {
  let component: Top2HomeComponent;
  let fixture: ComponentFixture<Top2HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top2HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
