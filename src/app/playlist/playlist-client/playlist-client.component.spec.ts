import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistClientComponent } from './playlist-client.component';

describe('PlaylistClientComponent', () => {
  let component: PlaylistClientComponent;
  let fixture: ComponentFixture<PlaylistClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
