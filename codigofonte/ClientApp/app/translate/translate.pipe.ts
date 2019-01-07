import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
    constructor(
        private service: TranslateService
    ) { }

  transform(term: string): string {
    return this.service.translate(term);
  }
}