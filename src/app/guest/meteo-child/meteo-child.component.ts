import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';

@Component({
	selector: 'app-meteo-child',
	templateUrl: './meteo-child.component.html',
	styleUrls: ['./meteo-child.component.css']
})
export class MeteoChildComponent implements OnInit {

	location= {
		city:'strasbourg',
		code:'fr'
	}

	weatherObj;
	temp : number;
	typeDeTemp: string;

	constructor(private weatherService: WeatherService) { }

	ngOnInit() {
		//if ((this.location.city) !== '')
	//{
	this.weatherService.getWeather(this.location.city, this.location.code).subscribe(res => {this.weatherObj = res;
		this.temp = Math.round(res.main.temp - 273.15);
		console.log(this.weatherObj);}, error => {console.log(error)});
	//}
	}

	isClear() {
		if (this.weatherObj.weather[0].main == 'Clear') {
			this.typeDeTemp = 'Nuageux';
			return true;
		}
		else {return false};	
	}

	isClouds() {
		if (this.weatherObj.weather[0].main == 'Clouds') {
			this.typeDeTemp = 'Nuageux';
			return true;
		}
		else {return false};	
	}

	isRain() {
		if (this.weatherObj.weather[0].main == 'Rain' || this.weatherObj.weather[0].main == 'Thunderstorm') {
			this.typeDeTemp = 'Pluvieux'
			return true;
		}
		else {return false};	
	}

}
