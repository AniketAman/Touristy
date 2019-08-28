import { Component, OnInit } from "@angular/core";
import { LocationService } from "src/app/location.service";
import { LocalService } from "src/app/local.service";

@Component({
  selector: "app-location-info",
  templateUrl: "./location-info.component.html",
  styleUrls: ["./location-info.component.scss"]
})
export class LocationInfoComponent implements OnInit {
  lat;
  long;
  latlong;
  list;
  constructor(
    private location: LocationService,
    private storage: LocalService
  ) {
    const latlong = this.storage.get("latlong");
    if (latlong) {
      const { lat, long } = (this.latlong = JSON.parse(latlong));
      this.lat = lat;
      this.long = long;
    }
  }

  async ngOnInit() {
    this.list = await this.location.getWikipediaPlacesAround(this.latlong);
  }
}
