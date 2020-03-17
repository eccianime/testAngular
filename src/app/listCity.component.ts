import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'listcity',
	template: 
		`
			<a class=no-dec href="city/{{cityId}}">
				<div class=base-copy>
					<div class=base-copy-2><span class=letters>{{cityWeather}}°C</span></div>
					<div class=citydata>
						<div class=cityname>{{cityName}} <img class=flag src={{bringFlag()}} /></div>
						<div class=temp-box>
							<div class=temp-label>
								<div>Máx</div>
								<div>Min</div>
							</div>
							<div class=temp-info>
								<div class=max-temp>{{cityMax.toFixed(2)}} °C</div>
								<div class=min-temp>{{cityMin.toFixed(2)}} °C</div>	
							</div>
						</div>
					</div>
					<div class=city-image>
						<div class=city-drawing><img src={{bringCloud()}} /></div>
						<div class=city-letters>{{cityDesc}}</div>
					</div>
				</div>
			</a>
		`,
})

export class ListCityComponent {
	@Input() cityId: string;
	@Input() cityWeather: string;
	@Input() cityName: string;
	@Input() cityFlag: string;
	@Input() cityMax: number;
	@Input() cityMin: number;
	@Input() cityCloud: string;
	@Input() cityDesc: string;
	constructor( private router: Router ){}
	bringFlag(){
		return "http://openweathermap.org/images/flags/"+this.cityFlag.toLowerCase()+".png";
	}
	bringCloud(){
		return "http://openweathermap.org/img/wn/"+this.cityCloud+".png";
	}
	
}