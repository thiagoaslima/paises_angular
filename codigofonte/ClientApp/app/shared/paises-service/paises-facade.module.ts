import { NgModule } from "@angular/core";
import { PaisesFacadeService } from "./paises-service";
import { PesquisasAdapter } from "./adapters/pesquisas-adapter.service";

@NgModule({
    imports: [],
    providers: [
        PaisesFacadeService,
        PesquisasAdapter
    ]
})
export class PaisesFacadeModule {}