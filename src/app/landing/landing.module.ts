import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { StartupComponent } from './startup/startup.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LandingEspComponent } from './landing-esp/landing-esp.component';


@NgModule({
  declarations: [
    LandingComponent,
    StartupComponent,
    ContactoComponent,
    LandingEspComponent],
  imports: [
    CommonModule
  ],
  exports:[LandingComponent,StartupComponent,ContactoComponent]
})
export class LandingModule { }
