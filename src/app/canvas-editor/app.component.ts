import { Component } from '@angular/core';
import { fabric } from 'fabric';
import { FabricService } from '../shared/services/fabric-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'canvas';

  // protected _canvas?: fabric.Canvas;
  // constructor(
  //   protected _fabricService: FabricService // protected _zone: NgZone
  // ) {}
  // public ngOnInit(): void {
  //   this._canvas = new fabric.Canvas('fabricSurface', {
  //     backgroundColor: '#ebebef',
  //     selection: false,
  //     preserveObjectStacking: true,
  //   });
  // }
}
