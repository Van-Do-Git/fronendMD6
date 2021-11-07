import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginplayComponent } from './pluginplay.component';

describe('PluginplayComponent', () => {
  let component: PluginplayComponent;
  let fixture: ComponentFixture<PluginplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
