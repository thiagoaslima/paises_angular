import { Component, OnInit } from '@angular/core';
import { RouterParamsService } from '../services';

@Component({
    selector: 'app-paises',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private routerParams: RouterParamsService
    ) {

    }

    ngOnInit() {
        this.routerParams.params$.subscribe(params => {
            console.log('params', params);
        })
        
    }
}
