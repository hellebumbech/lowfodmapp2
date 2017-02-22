import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class DataService {

    constructor(private http: Http) {
    }

    getFoedevarerJson() {
        return this
        .http.get('https://hellebumbech.github.io/lowfodmapp/src/data/foedevarer.json');
    }

    getFoedevarer() {
        return this.getFoedevarerJson()
        .map(res => res.json().foedevarer);
    }

    getFoedevareById(foedevareId:string) {
        return this.getFoedevarerJson()
        .map(res => {
            var foedevarer = res.json().foedevarer;
            for(var item in foedevarer) {
                if(foedevarer[item].id == foedevareId) {
                    return foedevarer[item];
                }
          }
        });
    }

    getKulhydrattyperJson() {
        return this.
        http.get('https://hellebumbech.github.io/lowfodmapp/src/data/kulhydrattyper.json');
    }

    getKulhydrattyper() {
        return this.getKulhydrattyperJson()
        .map(res => res.json().kulhydrattyper);
    }

    gemIntolerance(kulhydrattyper:Kulhydrattype[]) {
        var intolerance:string[] = [];
        for(var item in kulhydrattyper) {
            if(kulhydrattyper[item].intolerance == true) {
                intolerance.push(kulhydrattyper[item].sukkerstof);
            }
        }
        localStorage.setItem('intolerance', JSON.stringify({ intolerance: intolerance }));
    }

    getIntolerance():string[] {
        var intoleranceJson = JSON.parse(localStorage.getItem('intolerance'));
        return (intoleranceJson ? intoleranceJson.intolerance : []);
    }
}

export interface Foedevare {
    id: string;
    kategori: string;
    navn: string;
	begraensningtekst: string,
	begraensning: string,
	fruktose: boolean,
	laktose: boolean,
	fruktaner: boolean,
	galaktaner: boolean,
	mannitol: boolean,
	sorbitol: boolean
}

export interface Kulhydrattype {
    navn:string,
    sukkerstof:string,
    intolerance:boolean
}