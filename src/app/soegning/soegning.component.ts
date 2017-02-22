import { Component, OnInit } from '@angular/core';
import { DataService, Foedevare } from '../data/data.service';

@Component({
    moduleId: module.id,
    selector: 'soegning',
    templateUrl: 'soegning.component.html',
    providers: [DataService]
})

export class SoegningComponent {
    foedevarer: Foedevare[];
    filtreredeFoedevarer: Foedevare[];
    soegetekst: string;

    constructor(private dataService: DataService) {
        this.dataService.getFoedevarer()
        .subscribe(foedevarer => 
            this.foedevarer = this.filtreredeFoedevarer = foedevarer);
    };

    assignCopy() {
        this.filtreredeFoedevarer = Object.assign([], this.foedevarer);
    }

    filterItem(value:string) {
        if(!value) {
            this.assignCopy();
        }
        this.filtreredeFoedevarer = Object.assign([], this.foedevarer).filter(
            foedevare => foedevare.navn.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }
}