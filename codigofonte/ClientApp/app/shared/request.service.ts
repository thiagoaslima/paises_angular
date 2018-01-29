import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

export class RequestService {
    constructor(
        private _httpClient: HttpClient
    ) { }

    protected request(url: string, params?: HttpParams): Observable<any> {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json');

        const options = {
            headers: headers
        };

        if (params) {
            // @ts-ignore
            options.params = params;
        }

        return this._httpClient.get(url, options).retry(3);
    }
}