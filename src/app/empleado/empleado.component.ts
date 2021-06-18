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
    if (entrada != null) { entrada.focus(); }
  }

  public verificarEntrada(valor:String) {
    this.nombre = valor;
    this.comprobarActivado();
  }

  public vaciarCampo(entrada:HTMLInputElement) {
    entrada.value = '';
    this.nombre = '';
    this.comprobarActivado();
  }

  public eventoChk(event:Event) { event.preventDefault(); }

  public getNombre() { return this.nombre; }
  public setNombre(valor:String) { this.nombre = valor; }
  public getActivo() { return this.activo; }
  public setActivo(activo:Boolean) { this.activo = activo; }

  private comprobarActivado() { this.activo = this.nombre.length > 0; }
}