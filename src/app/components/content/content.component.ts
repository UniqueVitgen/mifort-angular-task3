import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  incrementValue: number;
  constructor() { }

  ngOnInit() {
  }

  increment(value: number) {
    this.incrementValue = value;
  }

}
