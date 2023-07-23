import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit {
	@Input()
	title: string = "Jorge's Blog";

  constructor() { }

  ngOnInit(): void {
  }

}
