import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListCity } from './listCity.model';


@Component({
	selector: 'tabledata',
	template: 
		`
			<div class=responseList>
				<div *ngFor="let city of data.list">
					<listcity 
						[cityId]="city.id"
						[cityWeather]="city.main.temp"
						[cityName]="city.name"
						[cityFlag]="city.sys.country"
						[cityMax]="city.main.temp_max"
						[cityMin]="city.main.temp_min"
						[cityCloud]="city.weather[0].icon"
						[cityDesc]="city.weather[0].description"
						></listcity>
				</div>
			</div>
		`,
})

export class TableDataComponent {
	@Input() data;
	cities: ListCity[];

	constructor(){}
}