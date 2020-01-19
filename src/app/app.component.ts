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

    imageObject1 = [{
        video: 'https://youtu.be/6pxRHBw-k8M',
        posterImage: 'https://img.youtube.com/vi/6pxRHBw-k8M/hqdefault.jpg'
    }, {
        video: 'https://youtu.be/tYa6OLQHrEc',
        posterImage: 'https://img.youtube.com/vi/tYa6OLQHrEc/hqdefault.jpg'
    }, {
        image: 'assets/img/slider/4.jpg',
        thumbImage: 'assets/img/slider/4_min.jpeg'
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
