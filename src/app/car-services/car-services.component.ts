import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-services',
  templateUrl: './car-services.component.html',
  styleUrls: ['./car-services.component.scss']
})
export class CarServicesComponent implements OnInit {


  carServices = [{name: 'БАТ Сервиз', city: 'София', address: 'ул. Фармапарк', raiting: 3},
  {name: 'Балкан Стар Ритейл ООД', city: 'София', address: 'ул.Резбарска 5', raiting: 4},
  {name: 'Doctor Motors', city: 'София', address: 'Люлин 10, бл. 117', raiting: 5},
  {name: 'AutoProtect', city: 'София', address: 'бул. „Джавахарлал Неру“ 28', raiting: 5},
  {name: 'Дунев Мотор Спорт Р21 ЕООД', city: 'София', address: 'бул. „Асен Йорданов“ 4', raiting: 4},
  {name: 'Автосервиз - Експрес-2', city: 'София', address: 'ул. „Амстердам“ 8', raiting: 4},
  {name: 'Автосервиз "Спукано стъкло"', city: 'София', address: 'ул. „Роса“ 26', raiting: 4},
  {name: 'Автодиагностика нет', city: 'София', address: 'ул. „Димитър Пешев“ 16', raiting: 3},
  {name: 'Галакси Моторс', city: 'София', address: 'ул. „Самоковско шосе“ 89', raiting: 4},
  {name: 'София Дизел Център', city: 'София', address: 'ул. „Папрат“ 37', raiting: 4},
  {name: 'АУТОМЕХАНИКА ЕООД', city: 'София', address: 'ул. Околовръстен път', raiting: 4},
  {name: 'BUMER AUTO', city: 'София', address: 'бул. Черни връх 67', raiting: 4},
  {name: 'RESTART AUTO', city: 'София', address: 'бул.Черни връх 94', raiting: 4}];

  selectedValue: string;
  selectedCar: string;

  cars = [
    {value: 'sofia', viewValue: 'София'},
    {value: 'plovdiv', viewValue: 'Пловдив'},
    {value: 'burgas', viewValue: 'Бургас'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

  selectCar(event: Event) {
    this.selectedCar = (event.target as HTMLSelectElement).value;
  }
}
