import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

export class PlatformDetectionComponent {
  public isBrowser: boolean;
  public isServer: boolean;

  constructor(
    private platformId: Object
  ) {
    this.isBrowser =  isPlatformBrowser(platformId);
    this.isServer =  isPlatformServer(platformId);
  }
}