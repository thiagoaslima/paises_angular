import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[ibge-item-tema-host]' })
export class ItemTemaDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}