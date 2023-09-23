import { Component, OnInit } from '@angular/core';

export interface personas {
  nombre: string;
  apellido: string;
  ocupacion: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  personales: personas[] = [
    { nombre: 'Eddyel', apellido: 'Yam', ocupacion: 'Estudiante' },
    { nombre: 'Andres', apellido: 'Tzuc', ocupacion: 'nini' },
    { nombre: 'Fernando', apellido: 'Chan', ocupacion: 'Carpintero' },
    { nombre: 'Juan', apellido: 'Vazquez', ocupacion: 'Maestro' },
  ];
  constructor() {
    console.log(this.personales);
  }

  ngOnInit(): void {}

  btnDelete(): void {
    
  }
}