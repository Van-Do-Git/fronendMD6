import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatlistComponent } from './creatlist.component';

describe('CreatlistComponent', () => {
  let component: CreatlistComponent;
  let fixture: ComponentFixture<CreatlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
