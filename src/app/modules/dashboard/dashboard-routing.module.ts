import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from './pages/inicio/inicio.component';
import { MainComponent } from './pages/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: InicioComponent},
      {path: '**', redirectTo: ''}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
