import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LandingEspComponent } from './landing-esp/landing-esp.component';
import { HeaderComponent } from '../header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    LandingComponent,
    ContactoComponent,
    LandingEspComponent,
    HeaderComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports:[LandingComponent,ContactoComponent,LandingEspComponent,HeaderComponent]
})
export class LandingModule { }
