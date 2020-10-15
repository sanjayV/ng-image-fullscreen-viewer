# Angular Image Fullscreen Viewer

An Angular responsive image fullscreen viewer.
Also support youtube and mp4 video urls.

## Features!

  - Responsive
  - captures swipes from phones and tablets
  - Compatible with Angular Universal
  - captures keyboard next/previous arrow key event for lightbox image move
  - Support Images (jpeg, jpg, gif, png and Base64-String), Youtube url and MP4 video (url and Base64-String)

### Working Demo: https://angular-bkosu5.stackblitz.io/
### Code example: https://stackblitz.com/edit/angular-bkosu5


# Installation
`npm install ng-image-fullscreen-view`

# Setup :

**Import module in your `app.module.ts`:**
```typescript
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
...

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgImageFullscreenViewModule,
        ...
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}

```

**Add component in your template file :**
```html
<img src="path-of-image.jpg" (click)="showLightbox(0)" />

<ng-image-fullscreen-view
    [images]="imageObject"
    [imageIndex]="selectedImageIndex"
    [show]="showFlag"
    (close)="closeEventHandler()"></ng-image-fullscreen-view>
```

**Add closeEventHanler and showFlag conditions in `your.component.ts` :**
```typescript
export class AppComponent {
    showFlag: boolean = false;
    selectedImageIndex: number = -1;

    constructor () {}

    ...

    showLightbox(index) {
        this.selectedImageIndex = index;
        this.showFlag = true;
    }

    closeEventHandler() {
        this.showFlag = false;
        this.currentIndex = -1;
    }

    ...
}

```

**ImageObject format**
```js
imageObject: Array<object> = [{
        image: 'assets/img/slider/1.jpg',
    }, {
        image: 'assets/img/slider/1.jpg',
        alt: 'alt of image', // Optional
        title: 'title of image' // Optional: Show image with description text 
    }, {
        image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
        title: 'Image title', //Optional: You can use this key if want to show image with title
        alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    }
];
```

**Image, Youtube and MP4 url's object format**
 ```js
imageObject: Array<object> = [{
        video: 'https://youtu.be/6pxRHBw-k8M' // Youtube url
    },
	{
		video: 'assets/video/movie.mp4', // MP4 Video url
	},
	{
		video: 'assets/video/movie2.mp4',
        title: 'Image title' // Video with title
    },
	{
		image: 'assets/img/slider/1.jpg',
        alt: 'Image alt'
	}
    ...
];
```

## API Reference (optional) :

| Name | Type | Data Type | Description | Default |
|------|------|-----------|-------------|---------|
| images | @Input  | Array   | Images array. |  |
| imageIndex | @Input  | number   | Selected image index. | 0 |
| show | @Input  | boolean   | Image fullscreen popup visiable flag. | false |
| infinite | @Input  | boolean   | Infinite sliding images if value is **true**. | false |
| videoAutoPlay | @Input | boolean | Auto play popup video | false |
| showVideoControls | @Input | boolean | Hide Youtube and MP4 video controls if value is `false` | true |
| direction | @Input | string | Set text direction. You can pass **rtl** / **ltr** / **auto** | ltr |
| paginationShow | @Input  | boolean | Display pagination at bottom. | false |
| animationSpeed | @Input  | number | By this user can set slider animation speed. Minimum value is **0.1 second** and Maximum value is **5 second**. | 1 |
| arrowKeyMove | @Input | boolean | Disable slider and popup image left/right move on arrow key press event, if value is `false`  | true |
| close | @Output | n/a | Executes when click on close. | n/a |
| prevImage | @Output | n/a | Executes when click on previous arrow. | n/a |
| nextImage | @Output | n/a | Executes when click on next arrow. | n/a |

## License
As Angular itself, this module is released under the permissive [MIT license](http://revolunet.mit-license.org). 

Your contributions and suggestions are always welcome :)