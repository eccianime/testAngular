export class ListCity {
	cityId: number;
	cityWeather: string;
	cityName: string;
	cityFlag: string;
	cityMax: number;
	cityMin: number;
	cityCloud: string;
	cityDesc: string;

	constructor( cityId, cityWeather, cityName, cityFlag, cityMax, cityMin, cityCloud, cityDesc ){
		this.cityId = cityId;
		this.cityWeather = cityWeather;
		this.cityName = cityName;
		this.cityFlag = cityFlag;
		this.cityMax = cityMax;
		this.cityMin = cityMin;
		this.cityCloud = cityCloud;
		this.cityDesc = cityDesc;
	}
}