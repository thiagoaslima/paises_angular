import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable()
export class PlatformDetectionService {
    public isBrowser: boolean;
    public isServer: boolean;

    constructor(
        @Inject(PLATFORM_ID) platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(platformId);
        this.isServer = isPlatformServer(platformId);
    }
}