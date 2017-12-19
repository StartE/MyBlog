import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyHttpService {

    constructor(private http:Http) { }

    get(url:string): Observable<Response>{
        let headers = new Headers();
        let options = new RequestOptions({headers:headers});
        return this.http.get(url,options);
    }
    handleRes(res:any){
        return res.json();
    }
    handleError(error:any){
        return Observable.throw(error);
    }

}
