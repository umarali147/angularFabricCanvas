import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasContainerComponent } from './canvas-container.component';

describe('CanvasContainerComponent', () => {
  let component: CanvasContainerComponent;
  let fixture: ComponentFixture<CanvasContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
