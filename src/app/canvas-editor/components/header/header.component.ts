import { Component, OnInit } from '@angular/core';
import { FabricService } from 'src/app/shared/services/fabric-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private fabricService: FabricService) {}

  ngOnInit(): void {}
  download(): void {
    this.fabricService.download();
  }
}
