import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IrAService {
  private _destinoActual!: string;

  irAEfecto(destino: string) {
    this._destinoActual = destino;
    this.newUrl();
  }

  newUrl(){
    document.getElementById(this._destinoActual)?.scrollIntoView({behavior: "smooth"});
  }

  constructor() {}
}
