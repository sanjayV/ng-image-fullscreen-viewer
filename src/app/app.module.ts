import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgImageFullscreenViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
