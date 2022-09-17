import { Component, OnInit } from '@angular/core';
interface habilidad {
  icon: string;
  nombre: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  habilidad: habilidad[] = [
    {
      icon: 'Inicio',
      nombre: 'HTML & CSS',
    },
    {
      icon: 'Sobre mi',
      nombre: 'JavaScript',
    },
    {
      icon: 'Skills',
      nombre: 'TypeScript',
    },
    {
      icon: 'Proyectos',
      nombre: 'Angular',
    },
    {
      icon: 'Contacto',
      nombre: 'Tailwind',
    },
    {
      icon: 'Login',
      nombre: 'Bootstrap',
    },
    {
      icon: 'Login',
      nombre: 'Git & GitHub',
    },
    {
      icon: 'Login',
      nombre: 'Sql',
    },
    {
      icon: 'Login',
      nombre: 'C/C++',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
