import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FabricService } from 'src/app/shared/services/fabric-service';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class ImagesComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private FabricService: FabricService
  ) {}
  fileName = '';
  files: any;
  sanitizedUrl: any;
  ngOnInit(): void {}
  uploadImage(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    console.log(event.target.files);
    this.files = this.sanitizer.bypassSecurityTrustResourceUrl(
      URL.createObjectURL(file)
    );
    // if (file) {
    //   this.fileName = file.name;

    //   const formData = new FormData();

    //   formData.append('thumbnail', file);

    //   // const upload$ = this.http.post('/api/thumbnail-upload', formData);

    //   // upload$.subscribe();
    // }
    this.FabricService.addImage(URL.createObjectURL(file));
  }
}
