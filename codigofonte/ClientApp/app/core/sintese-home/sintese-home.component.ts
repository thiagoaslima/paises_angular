import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'sintese-home',
    templateUrl: './sintese-home.component.html',
    styleUrls: ['./sintese-home.component.css']
})
export class SinteseHomeComponent {
    public teste = 'hello world';

    constructor(
        private _route: ActivatedRoute
    ) {}
    
    ngOnInit() {
        this._route.paramMap
        .subscribe((params: ParamMap)  => {
            console.log('DENTRO', params)
            // if (params.pais) {
            //     this.paisSelecionado  = params.pais;
            //     this.setZoomOnPaisSelecionado();
            // }
        });
    }
}
