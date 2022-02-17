import { Component, OnInit } from '@angular/core';
import { FabricService } from 'src/app/shared/services/fabric-service';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'backgrounds',
  templateUrl: './backgrounds.component.html',
  styleUrls: ['./backgrounds.component.css'],
})
export class BackgroundsComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor(private FabricService: FabricService) {}

  ngOnInit(): void {}
  setBackground(color: string): void {
    this.FabricService.setBackgroundColor(color);
  }
}
