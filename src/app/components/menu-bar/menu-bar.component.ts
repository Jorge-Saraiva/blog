import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
	@Input()
	linkedinProfile: string = '';
	@Input()
	githubProfile: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
