import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Increment} from '../../classes/increment';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html'
})
export class DefaultComponent implements OnInit {
  _increment: Increment;
  @Input()
  get increment(): Increment {
    return this._increment;
  }
  set increment(value: Increment) {
    if (value) {
      this._increment = value;
      if (this._increment.value) {
        this.timeLeft += this._increment.value;
      }
    }
  };
  timeLeft: number = 60;
  interval: number;

  startTimer(): void {
    this.interval = setInterval(() => {
        this.timeLeft++;
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.startTimer();
  }


  constructor() { }

}
