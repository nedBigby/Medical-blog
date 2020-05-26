import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingModule } from './landing/landing.module';

import { BlogComponent } from './blog/blog.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    EspecialidadesComponent,
    ConsultaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
