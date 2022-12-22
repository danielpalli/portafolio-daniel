import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);
@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  descargarCv(){
    console.log("Descargando...");
  }
}
