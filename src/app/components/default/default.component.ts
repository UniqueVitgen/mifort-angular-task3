import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Increment} from '../../classes/increment';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent implements OnInit, OnChanges {
  @Input() increment: Increment;
  timeLeft = 60;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft++;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  ngOnInit() {
    this.startTimer();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.increment && this.increment.value) {
      this.timeLeft += this.increment.value;
    }
  }


  constructor() { }

}
