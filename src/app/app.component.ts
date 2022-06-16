import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    visiableLightbox: boolean = false;
    currentIndex: number = 0;
    currentObj = [];

    title = 'app';

    imageObject1 = [{
        image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
        thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
        title: 'Hummingbirds are amazing creatures'
    }, {
        image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
        thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
    }, {
        video: 'https://youtu.be/tYa6OLQHrEc',
        posterImage: 'https://img.youtube.com/vi/tYa6OLQHrEc/hqdefault.jpg',
        title: 'Youtube example one with title.'
    }, {
        image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
        thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
        title: 'Most beautiful birds in the world flying.'
    }];

    showLightbox(object, index) {
        this.currentIndex = index;
        this.currentObj = object;
        console.log('=>', this.currentObj, this.currentIndex)
        this.visiableLightbox = true;
    }

    closeHandler() {
        this.visiableLightbox = false;
        this.currentIndex = -1;
    }
}
