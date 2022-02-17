import { Injectable } from '@angular/core';

import { fabric } from 'fabric';

// import { POINT } from '../libs/point';

@Injectable({ providedIn: 'root' })
export class FabricService {
  _canvas?: fabric.Canvas;
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
  addText(text: string, options: any) {
    let canvas = this?._canvas;

    let textObj = new fabric.IText(text, options);
    textObj = this.setOnCanvasCenter(textObj);

    canvas?.add(textObj);
  }
  setOnCanvasCenter(obj: any): any {
    let canvas = this?._canvas;
    let width = canvas?.width;
    let height = canvas?.height;
    return obj.set({
      left: (width ? width : 600) / 2,
      top: (height ? height : 600) / 2,
      originX: 'center',
      originY: 'center',
    });
  }
  addSvg(url: string): void {
    fabric.loadSVGFromURL(url, (objects, options) => {
      let obj = fabric.util.groupSVGElements(objects, options);
      obj.scale(0.5);
      this._canvas?.add(obj);
      this._canvas?.renderAll();
      console.log(obj);
    });
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
