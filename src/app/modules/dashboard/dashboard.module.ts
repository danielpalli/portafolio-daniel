import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarouselTecnologiasComponent } from './components/carousel-tecnologias/carousel-tecnologias.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    InicioComponent,
    SobreMiComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    CarouselTecnologiasComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SwiperModule
  ],
  exports: [
    InicioComponent,
    SobreMiComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
  ],
})
export class DashboardModule {}
