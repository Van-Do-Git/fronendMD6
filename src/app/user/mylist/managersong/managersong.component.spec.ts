import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersongComponent } from './managersong.component';

describe('ManagersongComponent', () => {
  let component: ManagersongComponent;
  let fixture: ComponentFixture<ManagersongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagersongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
