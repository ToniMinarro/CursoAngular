import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  private nombre:String = '';
  private activo:Boolean = false;

  constructor() { }

  ngOnInit() {
    var entrada = document.getElementById('nombre');
    if (entrada != null) {
      entrada.focus();
    }
  }

  getNombre() { return this.nombre; }
  setNombre(valor:String) { this.nombre = valor; }
  getActivo() { return this.activo; }
  setActivo(activo:Boolean) { this.activo = activo; }

  verificarEntrada(valor:String) {
    this.nombre = valor;
    this.activo = this.nombre.length > 0; 
  }

  eventoChk(event:Event) { event.preventDefault() }
}