import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactoComponent} from './pages/contacto/contacto.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import {ProyectosComponent} from './pages/proyectos/proyectos.component';
import {SkillsComponent} from './pages/skills/skills.component';
import {SobreMiComponent} from './pages/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: InicioComponent},
      {path: 'sobre-mi', component: SobreMiComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: 'contacto', component: ContactoComponent},
      {path: '**', redirectTo: ''}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
