import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Increment} from '../../classes/increment';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  incrementValue: Increment = new Increment();
  constructor() { }

  ngOnInit() {
  }

  increment(value: number) {
    this.incrementValue.value = value;
    this.incrementValue.date = new Date();
    this.incrementValue = Object.assign({}, this.incrementValue);
  }

}
