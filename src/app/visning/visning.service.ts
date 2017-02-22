import { Injectable } from '@angular/core';
import { Foedevare } from '../data/data.service';

@Injectable()

export class VisningService {

  getIntolerance():string[] {
        var intoleranceJson = JSON.parse(localStorage.getItem('intolerance'));
        return (intoleranceJson ? intoleranceJson.intolerance : []);
    }

    getKulhydraterIFoedevare(foedevare:Foedevare) {
      var result:String[] = [];
      for(var i in foedevare) {
        if(foedevare[i] == true) {
          result.push(i)
        }
      }
      return result;
    }

    getIntoleranceNiveau(foedevare:Foedevare):string {
      var intoleranceData = this.getIntolerance();
      var kulhydraterIFoedevare = this.getKulhydraterIFoedevare(foedevare);
      var i = 0;
      var result = IntoleranceNiveau[1];
      while(i < intoleranceData.length && result == IntoleranceNiveau[1]) {
        if(kulhydraterIFoedevare.indexOf(intoleranceData[i]) !== -1) {
          if(foedevare.begraensning != null) {
            result = IntoleranceNiveau[2];
          }
          else {
            result = IntoleranceNiveau[3];
          }
        }
        i++;
      }
      return result;
    }
}

export enum IntoleranceNiveau {
    OK = 1,
    SEMI_OK = 2,
    IKKE_OK = 3
}