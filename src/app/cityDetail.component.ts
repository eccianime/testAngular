import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
	template: 
		`
			<div>
				<a href="/index" class="no-dec"><span class="ion ion-android-arrow-back flecha-atras"></span></a>
				<div class=Rectangle-2>
					<inputdata [readonly]="true" [valueBase]="data['name']" ></inputdata>
				</div>
				<div class=detail-content>
					<div class=weather-in>Weather in {{data['name']}}</div>
					<div class=weather-date>{{bringDate(data['dt'],1)}}</div>
					<div class=detail-card>
						<div class=upper-section>
							<div class=left-temp>
								<div class=base-copy-3>
									<span class=letters>{{data['main']['temp'].toFixed(0)}}°C</span>
								</div>
								<div class=city-drawing-2><img src="{{bringCloud()}}"></div>
								<div class=city-letters>{{data['weather'][0].description}}</div>
							</div>
							<div class=right-temp>
								<table class=temp-box-2>
									<tr>
										<td class=temp-label>Máx</td>
										<td class=max-temp>{{data['main']['temp_max'].toFixed(2)}} °C</td>
									</tr>
									<tr>
										<td class=temp-label>Min</td>
										<td class=min-temp>{{data['main']['temp_min'].toFixed(2)}} °C</td>
									</tr>
									<tr>
										<td class=temp-label>Sunrise</td>
										<td class=no-temp>{{bringDate(data['sys']['sunrise'],0)}}</td>
									</tr>
									<tr>
										<td class=temp-label>Sunset</td>
										<td class=no-temp>{{bringDate(data['sys']['sunset'],0)}}</td>
									</tr>
								</table>
							</div>
						</div>
						<div class=lower-section>
							<div class=ls-title>
								<span class=fiveday>5 day weather forecast</span> <span class=every3>every 3 hours </span>
							</div>
							<table class="temp-box-2" width=100%>
								<tr *ngFor="let forecast of data2">
									<lowersection 
										[dt]="forecast['dt']"
										[hour]="forecast['dt']"
										[img]="forecast['weather'][0]['icon']"
										[desc]="forecast['weather'][0]['description']"
										[temp_max]="forecast['main']['temp_max']"
										[temp_min]="forecast['main']['temp_min']"
									></lowersection>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		`,
})

export class CityDetailComponent {
	id: string;
	data: Object;
	data2: Object;
	readonly: boolean= true;

	constructor(private route: ActivatedRoute, public http: HttpClient) {
		route.params.subscribe(params => { this.id = params['id']; });

		var url = "https://api.openweathermap.org/data/2.5/weather?id="+this.id+"&units=metric&appId=76d1b43ba3695cfae59aa9f7dc9b4877";
		this.http
			.get(url)
			.subscribe(data => {
				this.data = data;				
			}); 

		var url2 = "http://api.openweathermap.org/data/2.5/forecast?id="+this.id+"&units=metric&appId=76d1b43ba3695cfae59aa9f7dc9b4877";
		this.http
			.get(url2)
			.subscribe(data2 => {
				this.data2 = data2['list'];
			}); 
	}

	bringCloud(){
		return "http://openweathermap.org/img/wn/"+this.data['weather'][0].icon+".png";
	}

	pad(n){
		return n < 10 ? "0"+n : n;
	}

	bringDate( daten, complete ){
		let date = new Date(daten*1000);
		var extra = "";
		if( complete ){
			extra = " "+this.month(date.getMonth())+" "+date.getDate();
		}
		return this.pad(date.getHours())+":"+this.pad(date.getMinutes())+extra;
	}

	month(month){
		let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		return months[month];
	}
}