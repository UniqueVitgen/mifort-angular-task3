import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Increment} from '../../classes/increment';

@Component({
  selector: 'app-push-with-detection',
  templateUrl: './push-with-detection.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushWithDetectionComponent implements OnInit, OnChanges {
  @Input() increment: Increment;
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
    if (this.increment && this.increment.value) {
      this.timeLeft += this.increment.value;
      this.cd.detectChanges();
    }
  }

  constructor(private cd: ChangeDetectorRef) { }

}
