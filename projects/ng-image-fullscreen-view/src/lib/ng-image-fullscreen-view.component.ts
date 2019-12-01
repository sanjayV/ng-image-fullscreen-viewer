import {
    ChangeDetectorRef,
    Component,
    OnInit,
    Inject,
    AfterViewInit,
    OnDestroy,
    Input,
    Output,
    EventEmitter,
    ViewEncapsulation,
    ViewChild,
    HostListener,
    ElementRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgImageFullscreenViewService } from './ng-image-fullscreen-view.service';

const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/,
    validFileExtensions = ['jpeg', 'jpg', 'gif', 'png'],
    validVideoExtensions = ['mp4'];

@Component({
    selector: 'ng-image-fullscreen-view',
    templateUrl: './ng-image-fullscreen-view.html',
    styleUrls: ['./ng-image-fullscreen-view.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NgImageFullscreenViewComponent implements OnInit, AfterViewInit, OnDestroy {
    YOUTUBE = 'youtube';
    IMAGE = 'image';
    VIDEO = 'video';
    INVALID = 'invalid';
    totalImages: number = 0;
    nextImageIndex: number = -1;
    popupWidth: number = 1200;
    marginLeft: number = 0;
    imageFullscreenView: boolean = false;
    lightboxPrevDisable: boolean = false;
    lightboxNextDisable: boolean = false;
    showLoading: boolean = true;
    effectStyle: string = 'none';
    speed: number = 1; // default speed in second
    title: string = '';
    currentImageIndex: number = 0;

    // @Inputs
    @Input()
    set show(visiableFlag: boolean) {
        this.imageFullscreenView = visiableFlag;
        this.elRef.nativeElement.ownerDocument.body.style.overflow = '';
        if (visiableFlag === true) {
            this.elRef.nativeElement.ownerDocument.body.style.overflow = 'hidden';
        }
    }
    @Input() videoAutoPlay: boolean = false;
    @Input() direction: string = 'ltr';
    @Input() images: Array<object> = [];
    @Input()
    set imageIndex(index: number) {
        if (index !== undefined && index > -1 && index < this.images.length) {
            this.currentImageIndex = index;
        }
        this.nextPrevDisable();
    }
    @Input() paginationShow: boolean = false;
    @Input()
    set animationSpeed(data: number) {
        if (data
            && typeof (data) === 'number'
            && data >= 0.1
            && data <= 5) {
            this.speed = data;
        }
    }
    @Input() infinite: boolean = false;
    @Input() arrowKeyMove: boolean = true;

    // @Output
    @Output() close = new EventEmitter<any>();
    /* @Output() prevImage = new EventEmitter<any>(); */
    /* @Output() nextImage = new EventEmitter<any>(); */

    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event && event.key && this.arrowKeyMove) {
            if (event.key.toLowerCase() === 'arrowright') {
                this.nextImageLightbox();
            }

            if (event.key.toLowerCase() === 'arrowleft') {
                this.prevImageLightbox();
            }
        }
    }

    constructor(
        public imageFullscreenViewService: NgImageFullscreenViewService,
        private cdRef: ChangeDetectorRef,
        private sanitizer: DomSanitizer,
        private elRef: ElementRef,
        @Inject(DOCUMENT) private document: any) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getImageData();
        this.cdRef.detectChanges();
    }

    ngOnDestroy() {
        this.resetState();
    }

    closeLightbox() {
        this.close.emit();
    }

    prevImageLightbox() {
        if (this.infinite && this.currentImageIndex === 0) {
            this.currentImageIndex = this.images.length;
        }

        if (this.currentImageIndex > 0 && !this.lightboxPrevDisable) {
            this.currentImageIndex--;
            this.getImageData();
            this.nextPrevDisable();
        }
    }

    nextImageLightbox() {
        if (this.infinite && this.currentImageIndex === this.images.length - 1) {
            this.currentImageIndex = -1;
        }

        if (this.currentImageIndex < this.images.length - 1 && !this.lightboxNextDisable) {
            this.currentImageIndex++;
            this.getImageData();
            this.nextPrevDisable();
        }
    }

    nextPrevDisable() {
        this.lightboxNextDisable = true;
        this.lightboxPrevDisable = true;
        this.applyButtonDisableCondition();
    }

    applyButtonDisableCondition() {
        this.lightboxNextDisable = false;
        this.lightboxPrevDisable = false;
        if (!this.infinite && this.currentImageIndex >= this.images.length - 1) {
            this.lightboxNextDisable = true;
        }
        if (!this.infinite && this.currentImageIndex <= 0) {
            this.lightboxPrevDisable = true;
        }
    }

    getImageData() {
        if (this.images
            && this.images.length
            && typeof (this.currentImageIndex) === 'number'
            && this.currentImageIndex !== undefined
            && this.images[this.currentImageIndex]
            && (this.images[this.currentImageIndex]['image'] || this.images[this.currentImageIndex]['video'])) {
            this.title = this.images[this.currentImageIndex]['title'] || '';
            this.totalImages = this.images.length;
            for (const iframeI in this.document.getElementsByTagName('iframe')) {
                if (this.document.getElementsByTagName('iframe')[iframeI]
                    && this.document.getElementsByTagName('iframe')[iframeI].contentWindow) {
                    this.document.getElementsByTagName('iframe')[iframeI].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            }
            for (const videoI in this.document.getElementsByTagName('video')) {
                if (this.document.getElementsByTagName('video')[videoI] && this.document.getElementsByTagName('video')[videoI].pause) {
                    this.document.getElementsByTagName('video')[videoI].pause();
                }
            }
        }
    }

    resetState() {
        this.images = [];
    }
}
