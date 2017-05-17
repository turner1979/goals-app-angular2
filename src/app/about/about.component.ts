import { Component } from '@angular/core';
//import { config } from '../config';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})

export class AboutComponent {

  public aboutTitle:string = 'About Page'

	//public maxCities: number = config.MAX_CITIES;
}
