import { Component } from '@angular/core';
import { faAngleRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carcontainer',
  templateUrl: './carcontainer.component.html',
  styleUrls: ['./carcontainer.component.scss']
})
export class CarcontainerComponent {
  faCircleCheck = faCircleCheck;
  faAngleRight = faAngleRight;
}
