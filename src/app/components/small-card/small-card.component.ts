import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCardComponent implements OnInit {
	@Input()
	photoCard: string = "";
	@Input()
	cardDate: string = "";
	@Input()
	cardTitle: string = "";

	constructor() { }

	ngOnInit(): void {
	}

}
