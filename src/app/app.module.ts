import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './components/default/default.component';
import { PushComponent } from './components/push/push.component';
import { PushWithDetectionComponent } from './components/push-with-detection/push-with-detection.component';
import { ContentComponent } from './components/content/content.component';
import { IncrementComponent } from './components/increment/increment.component';
import {MaterialModule} from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    PushComponent,
    PushWithDetectionComponent,
    ContentComponent,
    IncrementComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
