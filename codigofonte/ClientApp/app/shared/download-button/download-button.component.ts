import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'download-button',
    templateUrl: 'download-button.component.html',
    styleUrls: ['download-button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadButtonComponent {
    @Input() url = '';
}
