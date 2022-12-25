import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Output() destino = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  irA(destino:string){
    this.destino.emit(destino);
    console.log(this.destino.emit(destino));
  }




}
