import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Link {
  name: string;
  url: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  links: Link[] = [
    {
      name: 'Inicio',
      url: '/inicio',
    },
    {
      name: 'Sobre mi',
      url: '/sobre-mi',
    },
    {
      name: 'Skills',
      url: '/skills',
    },
    {
      name: 'Proyectos',
      url: '/proyectos',
    },
    {
      name: 'Contacto',
      url: '/contacto',
    },
    {
      name: 'Login',
      url: '/auth/login',
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}





}
