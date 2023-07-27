import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.responsive.component.css']
})
export class BigCardComponent implements OnInit {
	@Input()
	photoCover: string = '';
	@Input()
	photoCoverDescription: string = '';
	@Input()
	contentDate: string = '';
	@Input()
	contentTitle: string = '';
	@Input()
	contentDescription: string = '';
	@Input()
	Id:string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
