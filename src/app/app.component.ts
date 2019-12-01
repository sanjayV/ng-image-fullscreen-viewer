import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    visiableLightbox: boolean = false;
    currentIndex: number = 0;

    title = 'app';
    imageObject = [{
        image: 'assets/img/slider/5.jpg',
        thumbImage: 'assets/img/slider/5_min.jpeg',
        title: 'image five'
    }, {
        image: 'assets/img/slider/6.jpg',
        thumbImage: 'assets/img/slider/6_min.jpeg',
        alt: 'image six'
    }, {
        image: 'assets/img/slider/7.jpg',
        thumbImage: 'assets/img/slider/7_min.jpeg',
        alt: 'alt of image seven',
        title: 'title of image seven'
    }];

    showLightbox(index) {
        this.currentIndex = index;
        this.visiableLightbox = true;
    }

    closeHandler() {
        this.visiableLightbox = false;
    }
}
