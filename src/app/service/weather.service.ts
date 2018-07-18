import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class WeatherService {

	apiKey="dfb5aa45ae88626e62cea065f6abbcae";
	apiUrl;
	constructor(private http: Http) {
		this.apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
	}

	getWeather(city, code) {
		return this.http.get(this.apiUrl+city+','+code+'&APPID='+this.apiKey).pipe(map((res:Response) => res.json()), catchError((error:any) => Observable.throw(error)));
	}
}

