import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TranslateService } from "./translate.service";

@Injectable()
export class TranslateInterceptor implements HttpInterceptor {
  constructor(private translateService: TranslateService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const { id } = this.translateService.currentLanguage;
    const req = request.clone({
      setParams: {
        lang: id
      }
    });
    return next.handle(req);
  }
}
