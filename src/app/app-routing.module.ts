import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {EspecialidadesComponent} from './especialidades/especialidades.component';
import {ConsultaComponent} from './consulta/consulta.component';
import {BlogComponent} from './blog/blog.component';



const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  { path: '', component: LandingComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'especialidades', component: EspecialidadesComponent},
  { path: 'consulta', component: ConsultaComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
