import { TraducaoService } from './traducao.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'l10n'
})

export class L10NPipe implements PipeTransform {
    constructor(
        private _traducaoServ: TraducaoService
    ) { }

    transform(prop: string): string {
        return this._traducaoServ.translate(prop);
    }
}