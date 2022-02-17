import { Injectable } from '@angular/core';

import { fabric } from 'fabric';

// import { POINT } from '../libs/point';

@Injectable({ providedIn: 'root' })
export class FabricService {
  protected _canvas?: fabric.Canvas;
  constructor() {}

  // this._canvas.on('mouse:down',function(event){
  //   if(canvas.getActiveObject()){
  //     alert(event.target);
  //   }
  setCanvas(canvas: fabric.Canvas): void {
    this._canvas = canvas;
  }
  public clear(): void {
    if (this._canvas) {
    }
  }
  addSvg(url: string): void {
    // fabric.loadSVGFromURL(url, function (objects) {
    //   var group = new fabric.PathGroup(objects, {
    //     left: 165,
    //     top: 100,
    //     width: 295,
    //     height: 211,
    //   });
    //   this._canvas?.add(group);
    //   this._canvas?.renderAll();
    // });
  }
  addImage(url: string) {
    console.log({ url });
    let canvas = this._canvas;
    fabric.Image.fromURL(url, function (myImg) {
      //i create an extra var for to change some image properties
      var img1 = myImg.set({ left: 0, top: 0, width: 150, height: 150 });
      canvas?.add(img1);
    });
  }
  setBackgroundColor(color: string): void {
    console.log(color), this._canvas;
    this._canvas?.setBackgroundColor(
      color,
      this._canvas.renderAll.bind(this._canvas)
    );
  }
}
