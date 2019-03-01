import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { AnalyticsService } from './analytics.service';

@Directive({
    selector: '[ga-event]',
})
export class AnalyticsCustomEventDirective {
    private currentHandler: any;

    @Input('event') set eventType(eventType: string) {
        this.toggleHandler(eventType);
    }
    @Input() category = '';
    @Input() action = '';
    @Input() label = '';

    constructor(
        private renderer: Renderer2,
        private service: AnalyticsService,
        private element: ElementRef
    ) {}

    private toggleHandler(eventType: string) {
        if (this.currentHandler) {
            this.currentHandler();
        }

        this.currentHandler = this.renderer.listen(
            this.element.nativeElement,
            eventType,
            () => this.handleEvent()
        );
    }

    private handleEvent() {
        const { category, action, label } = this;
        this.service.sendCustomEvent({
            category,
            action,
            label,
        });
    }
}
