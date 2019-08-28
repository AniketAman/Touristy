import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/location.service";
import { LocalService } from "src/app/local.service";
import { Router } from "@angular/router";
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"]
})
export class LandingComponent implements OnInit {
  place = "";
  locationObject: any;
  latlong: any;
  constructor(
    private loc: LocationService,
    private storage: LocalService,
    private router: Router
  ) {}

  async getLocationName(locObject) {
    this.locationObject = await this.loc.getReverseGeoCoding(locObject);
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      res => {
        this.latlong = {
          lat: res.coords.latitude,
          long: res.coords.longitude
        };
        this.getLocationName(this.latlong);
      },
      err => {
        console.log(err);
      }
    );
  }

  submitingArea(event) {
    if (this.place.trim() === "") {
      this.showLocation();
    }
    event.preventDefault();
  }

  showLocation() {
    console.log(this.getCurrentLocation());
  }

  selectLocation() {
    this.storage.set({
      name: "latlong",
      item: JSON.stringify(this.latlong)
    });
    this.router.navigate(["/info"]);
  }

  ngOnInit() {}
}
