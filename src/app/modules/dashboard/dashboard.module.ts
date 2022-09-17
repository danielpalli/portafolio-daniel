import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    InicioComponent,
    SobreMiComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [InicioComponent, SobreMiComponent, SkillsComponent, ProyectosComponent, ContactoComponent]
})
export class DashboardModule {}
