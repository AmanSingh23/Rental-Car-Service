import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  flag = true;
  ngOnInit() {
    this.myFunction('q1','a1')
    this.flag = true;
  }
  myFunction(id: string,id1: string) {
    const buttons = document.getElementById(id);
    const buttons1 = document.getElementById(id1);
    if(this.flag) {
      buttons?.classList.add('active-question');
      buttons1?.classList.add('active-answer');
      this.flag = false;
    }
    else {
      buttons?.classList.remove('active-question');
      buttons1?.classList.remove('active-answer');
      this.flag =true;
    }
  }
}
