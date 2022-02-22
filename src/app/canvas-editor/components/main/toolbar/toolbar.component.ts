import { Component, OnInit } from '@angular/core';
import { FabricService } from 'src/app/shared/services/fabric-service';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private fabricService: FabricService) {}

  ngOnInit(): void {}
  setText(action: string): void {
    this.fabricService.setText(action);
  }
}
