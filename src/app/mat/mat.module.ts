import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule]
})
export class MyOwnCustomMaterialModule {}
