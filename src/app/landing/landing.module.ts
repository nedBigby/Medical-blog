import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LandingEspComponent } from './landing-esp/landing-esp.component';
import { HeaderComponent } from '../header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    LandingComponent,
    ContactoComponent,
    LandingEspComponent,
    HeaderComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule
  ],
  exports:[LandingComponent,ContactoComponent,LandingEspComponent,HeaderComponent,MatCardModule,MatGridListModule,MatFormFieldModule]
})
export class LandingModule { }
