import { Component } from '@angular/core';
import { ListCity } from './listCity.model';
import { HttpClient } from '@angular/common/http';

@Component({
	template:
		`
			<div>
				<div class=Rectangle>
					<div class=WEATHER-IN-YOUR-CITY>WEATHER IN YOUR CITY</div>
					<inputdata (valueChange)="onValueChange($event)"></inputdata>
				</div>
				<tabledata [data]="data" ></tabledata>
				<div *ngIf="loading" class=loader>
					<div class=spinner><span class=ion-android-refresh></span></div>
					<div>Loading...</div>
				</div>
			</div>
		`,
})

export class BaseAppComponent {
	data: Object;
	loading: boolean;

	onValueChange( value:string ){
		if( value.length > 2 ){
			let url = "https://api.openweathermap.org/data/2.5/find?q="+value+"&units=metric&appId=76d1b43ba3695cfae59aa9f7dc9b4877";
			this.loading = true;
			this.http
				.get(url)
				.subscribe(data => {
					this.data = data;
					this.loading = false;
				});
		}else{
			this.data = [];
		}
	}

	constructor(public http: HttpClient) {
		this.data = [];
	}

	
}