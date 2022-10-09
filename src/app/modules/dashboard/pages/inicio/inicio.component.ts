import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  redes: any[] = [{
    nombre: 'github',
    img: '../../../../../assets/redes/github-logo.png',
    url: 'https://github.com/danielpalli',
  },
  {
    nombre: 'facebook',
    img: '../../../../../assets/redes/facebook-logo.png',
    url: 'https://www.facebook.com/fernando.palli.16',
  },
  {
    nombre: 'twitter',
    img: '../../../../../assets/redes/twitter-logo.png',
    url: 'https://github.com/danielpalli',
  },
  {
    nombre: 'instagram',
    img: '../../../../../assets/redes/instagram-logo.webp',
    url: 'https://github.com/danielpalli',
  },



]

  constructor() { }

  ngOnInit(): void {
  }

}
