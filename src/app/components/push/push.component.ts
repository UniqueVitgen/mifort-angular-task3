import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushComponent implements OnInit, OnChanges {
  @Input() increment: number;

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
    if (this.increment) {
      this.timeLeft += this.increment;
    }
  }

  constructor() { }

}
