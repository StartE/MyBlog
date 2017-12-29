import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top1HomeComponent } from './top1-home.component';

describe('Top1HomeComponent', () => {
  let component: Top1HomeComponent;
  let fixture: ComponentFixture<Top1HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top1HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
