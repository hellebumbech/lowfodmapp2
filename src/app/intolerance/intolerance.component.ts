import { Component } from '@angular/core';
import { DataService, Kulhydrattype } from '../data/data.service';

@Component({
    selector: 'intolerance',
    template: `
        <h2>Registrer din intolerance</h2>
        <div>
            <div *ngFor="let kulhydrattype of kulhydrattyper">
                <label><input type="checkbox" [(ngModel)]="kulhydrattype.intolerance">
                    {{ kulhydrattype.navn }}: {{ kulhydrattype.sukkerstof }}
                </label>
            </div>
            <button (click)="gemIntolerance()" routerLink="/">Gem</button>
        </div>
    `,
    providers: [DataService]
})

export class IntoleranceComponent {
    kulhydrattyper:Kulhydrattype[];
    intolerance:string[];

    constructor(private dataService: DataService) {
        this.dataService.getKulhydrattyper().subscribe(kulhydrattyper => {
            this.kulhydrattyper = kulhydrattyper;
            this.intolerance = this.dataService.getIntolerance();
            for(var i in this.intolerance) {
                for(var j in this.kulhydrattyper) {
                    if(this.intolerance[i] == this.kulhydrattyper[j].sukkerstof) {
                        this.kulhydrattyper[j].intolerance = true;
                    }
                }
            }
        })
    }

    gemIntolerance() {
        this.dataService.gemIntolerance(this.kulhydrattyper);
    }
    
}