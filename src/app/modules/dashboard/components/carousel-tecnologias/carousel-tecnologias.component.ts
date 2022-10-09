import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay, Pagination]);
@Component({
  selector: 'app-carousel-tecnologias',
  templateUrl: './carousel-tecnologias.component.html',
  styleUrls: ['./carousel-tecnologias.component.scss'],
})
export class CarouselTecnologiasComponent implements OnInit {
  tecnologias: any[] = [
    {
      nombre: 'html',
      img: '../../../../../assets/tecnologias/html.png',
      altura: 'h-20',
      ancho: 'w-28',
    },
    {
      nombre: 'css',
      img: '../../../../../assets/tecnologias/css.png',
      altura: 'h-20',
      ancho: 'w-20',
    },
    {
      nombre: 'javascript',
      img: '../../../../../assets/tecnologias/javascript.png',
      altura: 'h-20',
      ancho: 'w-20',
    },
    {
      nombre: 'typescript',
      img: '../../../../../assets/tecnologias/typescript.png',
      altura: 'h-20',
      ancho: 'w-20',
    },
    {
      nombre: 'nodejs',
      img: '../../../../../assets/tecnologias/node.png',
      altura: 'h-20',
      ancho: 'w-28',
    },
    {
      nombre: 'angular',
      img: '../../../../../assets/tecnologias/angular.png',
      altura: 'h-20',
      ancho: 'w-20',
    },
    {
      nombre: 'mongodb',
      img: '../../../../../assets/tecnologias/mongo.png',
      altura: 'h-20',
      ancho: 'w-40',
    },
    {
      nombre: 'sql',
      img: '../../../../../assets/tecnologias/sql.png',
      altura: 'h-20',
      ancho: 'w-18',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
