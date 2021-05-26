import { Component, OnInit } from '@angular/core';
import cars from '../../../data/car-list.json';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carsData: any;
  constructor() {
    this.carsData = ["fiat uno", "fiat punto", "volvo XC60", "nissan versa"];
  }

  ngOnInit(): void {
  }

}
