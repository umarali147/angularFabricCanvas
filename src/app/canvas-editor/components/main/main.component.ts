import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { FabricService } from 'src/app/shared/services/fabric-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
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
