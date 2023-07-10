import { Component } from '@angular/core';
import { NEW_CAR } from 'src/app/constant/carmodel';
@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent {
 carmodel = NEW_CAR;
}
