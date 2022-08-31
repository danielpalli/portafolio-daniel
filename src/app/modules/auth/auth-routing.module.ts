import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from '../dashboard/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: InicioComponent },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
