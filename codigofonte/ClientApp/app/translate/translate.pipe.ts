import {
    Pipe,
    PipeTransform,
    ChangeDetectorRef,
    Injector,
} from '@angular/core';
import { TranslateService } from './translate.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ObjectWithTranslation } from './translate.models';

@Pipe({
    name: 'translate',
})
export class TranslatePipe implements PipeTransform {
    constructor(private service: TranslateService) {}

    transform(term: string | ObjectWithTranslation) {
        const translate = (function(service) {
            return typeof term === 'string'
                ? () => service.translate(term)
                : () => service.pluckTranslation(term);
        })(this.service);

        return this.service.currentId$.pipe(map(() => translate()));
    }
}
