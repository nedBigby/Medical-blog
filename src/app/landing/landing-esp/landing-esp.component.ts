import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-esp',
  templateUrl: './landing-esp.component.html',
  styleUrls: ['./landing-esp.component.css']
})
export class LandingEspComponent implements OnInit {


  private cards = [
    {
      title: "Estética",
      img: "../../../assets/c700x420.jpg",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall"
    },
    {
      title: "Anti-aging",
      img: "../../../assets/a4ac0fe02f324aa1597d405ac475837a.jpg",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall"
    },
    {
      title: "Nutrición",
      img: "../../../assets/hilos-de-la-dna-simples-y-hélice-dual-16944508.jpg",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall"
    },
    {
      title: "Genética",
      img: "../../../assets/magnesio-770x550.png",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall"
    }
  ]

  constructor() { }

  getCards = () =>{
    return this.cards;
  }

  ngOnInit(): void {
  }

}
