import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getReverseGeoCoding({ lat, long }) {
    const reverseGeoCodingUrl = ` https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${long}`;
    return this.http
      .get(reverseGeoCodingUrl)
      .pipe(res => res)
      .toPromise();
  }

  getWikipediaPlacesAround({ lat, long }) {
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=${lat}%7C${long}&format=json&origin=*`;
    return this.http
      .get(wikiUrl, {
        headers: new HttpHeaders({})
      })
      .pipe(res => res)
      .toPromise();
  }
}
