import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre:String = '';

  constructor() { }

  ngOnInit() {
  }

  getNombre() {
    return this.nombre;
  }

  setNombre(valor:String) {
    this.nombre = valor;
  }

  saludar() {
    return this.nombre.length == 0 ? '' : 'Hola ' + this.nombre;
  }
}