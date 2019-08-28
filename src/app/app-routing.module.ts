import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { LocationInfoComponent } from "./pages/location-info/location-info.component";

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "info", component: LocationInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
