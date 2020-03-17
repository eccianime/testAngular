import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: "lowersection",
	template: 
		`
			<td><span class=list-day>{{bringDate(dt,1)}}</span><br/><span class=list-hour>{{bringDate(dt,0)}}</span></td>
			<td><img src='{{bringCloud()}}'> <span class="city-letters ruby-text">{{desc}}</span></td>
			<td class=max-min-temp><span class="max-temp">{{temp_max}}°C    </span><span class="min-temp">{{temp_min}}°C</span></td>
		`,
})

export class LowerSectionComponent {
	@Input() dt;
	@Input() hour;
	@Input() img;
	@Input() desc;
	@Input() temp_max;
	@Input() temp_min;

	bringCloud(){
		return "http://openweathermap.org/img/wn/"+this.img+".png";
	}

	pad(n){
		return n < 10 ? "0"+n : n;
	}

	bringDate( daten, complete ){
		let date = new Date(daten*1000);
		var value = "";
		if( complete ){
			value = this.month(date.getMonth())+" "+date.getDate();
		}else{
			value = this.pad(date.getHours())+":"+this.pad(date.getMinutes());
		}
		return value;
	}

	month(month){
		let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		return months[month];
	}
}