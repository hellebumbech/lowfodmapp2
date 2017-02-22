import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foedevare } from '../data/data.service';
import { VisningService } from './visning.service';

@Component({
    selector: 'visning',
    template: `
		<h2>{{foedevare.navn}}</h2>
		{{foedevare.begraensningtekst}}<br><br>
		{{ foedevareIntolerance }}<br><br>
		<a routerLink="/soeg" class="btn">Tilbage</a>
		`,
		providers: [VisningService]
})

export class VisningComponent implements OnInit {
	foedevare:Foedevare;
	foedevareIntolerance:any;

	constructor(private route: ActivatedRoute, private visningService:VisningService) {}

	ngOnInit() {
		this.foedevare = this.route.snapshot.data['foedevare'];
		this.foedevareIntolerance = this.visningService.getIntoleranceNiveau(this.foedevare);
	}
	
}