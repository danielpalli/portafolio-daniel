import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IrAService } from 'src/app/modules/dashboard/services/ir-a.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private irAService:IrAService) {}

  ngOnInit(): void {}

  irA(destino:string){

    this.irAService.irAEfecto(destino);
  }




}
