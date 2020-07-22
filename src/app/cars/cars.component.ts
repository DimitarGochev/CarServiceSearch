import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars = ['Alfa Romeo', 'Audi', 'BMW', 'Citroen', 'Dacia', 'Ford', 'Fiat', 'Mazda', 'Mercedes-Benz', 'Opel', 'Peugeot', 'Renault', 'Toyota', 'VW'];

  constructor() { }

  ngOnInit() {
  }

}
