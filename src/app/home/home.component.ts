import { Component } from '@angular/core'
import { DataService } from '../data/data.service';

@Component({
    selector: 'home',
    template: `<h2>Velkommen til lowfodmapp</h2>
    <div>
        <a routerLink="/registrer">Registrer intolerance</a>
    </div>
    <div>
        <a routerLink="/soeg">Søg fødevare</a>
    </div>
    <div>
        Registreret intolerance: 
        <span *ngIf="intolerance.length == 0">Der er ikke registreret noget</span>
        <span *ngFor="let sukkerstof of intolerance; let i = index">
            {{ sukkerstof }}{{ i === intolerance.length - 1 ? '' : ', ' }}
        </span>
    </div>
    `,
    providers: [DataService]
})

export class HomeComponent {

    intolerance:string[];

    constructor(private dataService:DataService) {
        this.intolerance = dataService.getIntolerance();
    }


}