import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top3HomeComponent } from './top3-home.component';

describe('Top3HomeComponent', () => {
  let component: Top3HomeComponent;
  let fixture: ComponentFixture<Top3HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top3HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
