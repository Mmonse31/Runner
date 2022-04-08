import { Component, OnInit } from '@angular/core';
/* Import all of the required Google Maps entities from the google-maps package */
import { GoogleMaps, GoogleMapsEvent, LatLng, MarkerOptions, Marker } from "@ionic-native/google-maps";

import { Platform } from "@ionic/angular";

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage {
	constructor(public platform: Platform) { }

	/* Only instantiate the map AFTER the view is initialized and the DOM is accessible */
	ngAfterViewInit() {
		this.platform.ready().then(() => this.loadMap());
	}


	loadMap() {
		/* The create() function will take the ID of your map element */
		const map = GoogleMaps.create('map');

		map.one( GoogleMapsEvent.MAP_READY ).then((data: any) => {
			const coordinates: LatLng = new LatLng(41, -87);

			map.setCameraTarget(coordinates);
			map.setCameraZoom(8);
		});
	}
}









