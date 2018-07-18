import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-meteo-child',
	templateUrl: './meteo-child.component.html',
	styleUrls: ['./meteo-child.component.css']
})

export class MeteoChildComponent implements OnInit {

	location= {
		city:'',
		code:'fr'
	}

	
	name: string;
	temp : number;
	typeDeTemp: string;
	windSpeed: string;
	errorMessage: string;

	constructor(private route: ActivatedRoute, private weatherService: WeatherService) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.location.city = params.research;
			console.log(params);
				this.weatherService.getWeather(this.location.city, this.location.code).subscribe(res => {
					this.errorMessage ="";
					this.name= res.name;
					this.windSpeed = res.wind.speed;
					this.typeDeTemp = res.weather[0].main;
					this.temp = Math.round(res.main.temp - 273.15);
				}, error => {this.errorMessage = "Cette ville n'existe pas !";}
				);
			}, error => {console.log(error);}
		);
		
	}
	isClear() {
		if (this.typeDeTemp == 'Clear') {
			this.typeDeTemp = 'Ensoleillé';
			return true;
		}
		else {return false;}	
	}

	isClouds() {
		if (this.typeDeTemp == 'Clouds') {
			this.typeDeTemp = 'Nuageux';
			return true;
		}
		else {return false;}	
	}

	isRain() {
		if (this.typeDeTemp == 'Rain' || this.typeDeTemp == 'Thunderstorm') {
			this.typeDeTemp = 'Pluvieux';
			return true;
		}
		else {return false;}	
	}

	isMist () {
		if (this.typeDeTemp == 'Mist') {
			this.typeDeTemp = 'Brouillard';
			return true;
		}
		else {return false;}

	}

}
