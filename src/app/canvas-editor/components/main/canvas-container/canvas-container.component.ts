import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { FabricService } from 'src/app/shared/services/fabric-service';

@Component({
  selector: 'canvas-container',
  templateUrl: './canvas-container.component.html',
  styleUrls: ['./canvas-container.component.css'],
})
export class CanvasContainerComponent implements OnInit {
  protected _canvas?: fabric.Canvas;
  constructor(
    protected _fabricService: FabricService // protected _zone: NgZone
  ) {}
  public ngOnInit(): void {
    this._canvas = new fabric.Canvas('fabricSurface', {
      backgroundColor: '#ebebef',
      selection: false,
      preserveObjectStacking: true,
    });
    this._fabricService.setCanvas(this._canvas);
  }
}
