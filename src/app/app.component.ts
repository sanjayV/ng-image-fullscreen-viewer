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
        video: 'https://youtu.be/6pxRHBw-k8M'
    }, {
        video: 'https://youtu.be/tYa6OLQHrEc'
    },{
        video: 'assets/video/movie2.mp4',
        title: 'MP4 Video exmaple two with Poster-Image.',
        alt: 'alt MP4 Video exmaple two with Poster-Image.'
    }, {
        image: 'assets/img/slider/4.jpg',
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
