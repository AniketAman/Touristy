import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalService {
  constructor() {}

  set({ name, item }) {
    localStorage.setItem(name, item);
  }
  get(name) {
    return localStorage.getItem(name);
  }
}
