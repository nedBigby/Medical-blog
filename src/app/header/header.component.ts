import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Input() pageSelected:string;

  constructor(private router: Router) {}

  goToLanding = () =>{this.router.navigate(['/landing'])};
  goToBlog = () =>{this.router.navigate(['/blog'])};
  goToEspecialidades = () =>{this.router.navigate(['/especialidades'])};
  goToConsulta = () =>{this.router.navigate(['/consulta'])};

  ngOnInit(): void {
  }

}
