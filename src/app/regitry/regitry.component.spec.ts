import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitryComponent } from './regitry.component';

describe('RegitryComponent', () => {
  let component: RegitryComponent;
  let fixture: ComponentFixture<RegitryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegitryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
