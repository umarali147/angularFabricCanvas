import { Component, OnInit } from '@angular/core';
import { FabricService } from 'src/app/shared/services/fabric-service';

@Component({
  selector: 'shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css'],
})
export class ShapesComponent implements OnInit {
  constructor(private FabricService: FabricService) {}

  ngOnInit(): void {}
  addSvg(element: any): void {
    this.FabricService.addSvg(element.target.src);
  }
}
