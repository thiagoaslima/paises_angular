import { TraducaoService } from '../../services/traducao.service';
import { Component } from '@angular/core';



@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    constructor(
        public traducaoServ: TraducaoService
    ) { }
}
