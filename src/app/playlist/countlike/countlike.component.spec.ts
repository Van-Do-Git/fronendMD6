import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountlikeComponent } from './countlike.component';

describe('CountlikeComponent', () => {
  let component: CountlikeComponent;
  let fixture: ComponentFixture<CountlikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountlikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
