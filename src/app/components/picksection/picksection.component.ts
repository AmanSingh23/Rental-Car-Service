import { Component } from '@angular/core';
import { CAR_DATA } from 'src/app/constant/constant';

@Component({
  selector: 'app-picksection',
  templateUrl: './picksection.component.html',
  styleUrls: ['./picksection.component.scss']
})
export class PicksectionComponent {
  activeButton = '';
  details = CAR_DATA;
  imge = '';
  selectedModel = {
    name: "",
    price: "",
    img: "",
    model: "",
    mark: "",
    year: "",
    doors: "",
    air: "",
    transmission: "",
    fuel: "",
  }
  buttons = ['Audi A1 S-Line', 'BVW Golf 6', 'Toyota Camry', 'BMW 320 ModernLine', 'Mercedes-Benz GLK', 'VW Passat CC'];

  constructor() {
    this.selectedModel = CAR_DATA[0][0];
  }

  onClick(event: any) {
    const clickedButton = event.target;
    const buttonName = clickedButton.innerText;
    if (buttonName === this.activeButton) {
      this.activeButton = '';
      clickedButton.classList.remove('clicked');
    } else {
      this.activeButton = buttonName;
      this.resetButtons();
      clickedButton.classList.add('clicked');
    }
    this.changeCarImage(clickedButton.innerText);
    this.changeCarData(clickedButton.innerText);
  }

  resetButtons() {
    const buttons = document.querySelectorAll('.button');
    const myElement = document.querySelector('#button-0');
    buttons.forEach((button: any) => {
      if (button.innerText !== this.activeButton) {
        button.classList.remove('clicked');
        myElement?.classList.add('unclick');
      }
    });
  }

  changeCarImage(carName: string) {
    CAR_DATA.forEach(value => {
      if(value[0].name === carName) {
        this.imge = value[0].img;
      }
    })
  }

  changeCarData(carSelected: string) {
    CAR_DATA.forEach(value => {
      if(value[0].name === carSelected) {
        this.selectedModel = value[0]
      }
    })
  }
}
