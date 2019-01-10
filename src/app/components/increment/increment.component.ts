import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html'
})
export class IncrementComponent implements OnInit{
  incrementValue: number = 1000;
  @Output('increment') outputIncrement: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.outputIncrement.emit(this.incrementValue);
  }

}
