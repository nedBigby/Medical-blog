import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  goToLanding = () =>{this.router.navigate(['/landing'])};
  goToBlog = () =>{this.router.navigate(['/blog'])};
  goToEspecialidades = () =>{this.router.navigate(['/especialidades'])};
  goToConsulta = () =>{this.router.navigate(['/consulta'])};

  ngOnInit(): void {
  }

}
