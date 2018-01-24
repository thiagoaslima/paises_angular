import { Injectable } from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class PlatformDetectionService {
    public isBrowser: boolean;
    public isServer: boolean;

    constructor(
        private platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.isServer = isPlatformServer(platformId);
    }
}