import { Component, OnInit } from '@angular/core';
import { DotaService } from './../../services/dota.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

    teams: any[] = [];
    row: number = 20;
    length: number = 0;

    constructor(private dotaService: DotaService) { }

    ngOnInit() {
        this.getTeams();
    }
    getPlayer(id:number){
        
        this.dotaService.getPlayer(id).subscribe(
            res =>{
                console.log(res)
            },
            error =>{
                console.log(error)
            }
        )

    }
    getPlayerWinLose(id:number){

        this.dotaService.getPlayerWinLose(id).subscribe(
            res =>{
                console.log(res);
            },
            error =>{
                console.log(error)
                return;
            })
    }
    getTeams(){
        this.dotaService.getTeams().subscribe(
            res =>{
                this.teams = res;
                this.length = this.teams.length;
            },
            error =>{
                console.log(error)
            }
        )
    }
}
