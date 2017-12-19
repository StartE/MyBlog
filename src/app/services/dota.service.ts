import { Injectable } from '@angular/core';
import { MyHttpService } from './my-http.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';

@Injectable()
export class DotaService {

    constructor(private myHttpService:MyHttpService) { }

    getPlayer(id:number): Observable<any>{
        return this.myHttpService.get("https://api.opendota.com/api/players/"+id)
            .map(res => this.myHttpService.handleRes(res))
            .catch(error => {
                return this.myHttpService.handleError(error);
            });

    }
    getPlayerWinLose(id:number): Observable<any>{
        return this.myHttpService.get("https://api.opendota.com/api/players/"+id+"/wl")
            .map(res => this.myHttpService.handleRes(res))
            .catch(error => {
                return this.myHttpService.handleError(error);
            });

    }
    getTeams(): Observable<any>{
        return this.myHttpService.get("https://api.opendota.com/api/teams")
            .map(res => this.myHttpService.handleRes(res))
            .catch(error => {
                return this.myHttpService.handleError(error);
            });

    }
  

}
