import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	photoCover: string | undefined = "";
	photoCoverDescription: string | undefined = "";
	contentDate: string | undefined = "";
	contentTitle: string | undefined = "";
	contentDescription: string | undefined = "";

	private id: string | null | number = "0";

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.route.paramMap.subscribe(value => {
			this.id = value.get("id")
		}
		)

		this.setValuesToComponent(this.id)

	}

	setValuesToComponent(id: string | null | number) {
		const result = dataFake.filter(article => article.id == id)[0]

		if (result) {
			this.photoCover = result.photo
			this.photoCoverDescription = result.photoDescription
			this.contentDate = result.data 
			this.contentTitle = result.title
			this.contentDescription = result.description
		}
	}
}
