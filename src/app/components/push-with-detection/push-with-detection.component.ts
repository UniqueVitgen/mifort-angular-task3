import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-push-with-detection',
  templateUrl: './push-with-detection.component.html',
  styleUrls: ['./push-with-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushWithDetectionComponent implements OnInit, OnChanges {
  @Input() increment: number;
  timeLeft = 60;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft++;
        this.cd.detectChanges();
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
    console.log('onChanges');
    if (this.increment) {
      this.timeLeft += this.increment;
      this.cd.detectChanges();
    }
  }

  constructor(private cd: ChangeDetectorRef) { }

}
