import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Increment} from '../../classes/increment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  incrementValue: Increment = new Increment();
  constructor() { }

  increment(value: number): void {
    this.incrementValue = {
      value: value,
      date: new Date()
    };
  }

}
