import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.css']
})
export class ToolComponent implements OnInit {
  titulo = "Awesome Tools For WordPress webmasterss"; //creo una variable para luego llamarlo al html
  name = "Resultado...";

  constructor() { }

  ngOnInit(): void {
    
  }
  onChangeText() {
    this.titulo = "Herramientas impresionantes para webmasters de WordPress";
  }

}
