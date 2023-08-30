import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  activeDecrease = false;

  increase() {
    this.counter++;
    this.activeDecrease = false; 
  }

  decrease() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.showAlert(); 
    }

   
    if (this.counter === 0) {
      this.activeDecrease = true;
    }
  }

  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease;
  }

  showAlert() {
    alert('El contador ya está en cero.');
  }
}
