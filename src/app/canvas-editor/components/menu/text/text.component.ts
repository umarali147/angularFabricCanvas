import { Component, OnInit } from '@angular/core';
import { FabricService } from 'src/app/shared/services/fabric-service';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {
  constructor(private FabricService: FabricService) {}

  ngOnInit(): void {}
  addText(event: any, type: string) {
    const text = event.target.innerText;
    let options = {};
    if (type === 'heading') {
      options = { fill: 'black', fontSize: 48, fontWeight: 'bold' };
    } else if (type === 'subheading') {
      options = { fill: 'black', fontSize: 32, fontWeight: 800 };
    } else {
      options = { fill: 'black', fontSize: 24, fontWeight: 'normal' };
    }

    this.FabricService.addText(text, options);
  }
}
