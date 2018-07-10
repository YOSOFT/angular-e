import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: ``,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Visualizacion de datos';
  dias = ['Lunes-----', 'Martes----', 'Miercoles', 'Jueves----', 'Viernes---', 'Sabado---', 'Domingo-'];
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = "Cambio la propiedad";
      this.dias.push('nuevo valor');
    }, 5000);
  }
}
