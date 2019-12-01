import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderCustomImageComponent } from './slider-custom-image/slider-custom-image.component';
import { NgImageFullscreenViewComponent } from './ng-image-fullscreen-view.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SliderCustomImageComponent,
        NgImageFullscreenViewComponent
    ],
    exports: [
        NgImageFullscreenViewComponent
    ]
})
export class NgImageFullscreenViewModule { }
