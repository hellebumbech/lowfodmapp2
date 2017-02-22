import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DataService, Foedevare } from '../data/data.service';

@Injectable()

export class VisningResolver implements Resolve<any> {

  constructor(private dataservice: DataService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.dataservice.getFoedevareById(route.params['id']);
  }
}
