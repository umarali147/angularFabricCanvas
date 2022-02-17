import { NgModule } from '@angular/core';

// components
import { AppComponent } from './canvas-editor/app.component';
import { MainComponent } from './canvas-editor/components/main/main.component';
import { HeaderComponent } from './canvas-editor/components/header/header.component';

// mat
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './canvas-editor/components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { TextComponent } from './canvas-editor/components/menu/text/text.component';
import { TemplatesComponent } from './canvas-editor/components/menu/templates/templates.component';
import { ImagesComponent } from './canvas-editor/components/menu/images/images.component';
import { ShapesComponent } from './canvas-editor/components/menu/shapes/shapes.component';
import { BackgroundsComponent } from './canvas-editor/components/menu/backgrounds/backgrounds.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    HeaderComponent,
    TextComponent,
    TemplatesComponent,
    ImagesComponent,
    ShapesComponent,
    BackgroundsComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    MatGridListModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
