import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent {
  @Input('progress') progress: number = 50;
  @Output() progressOutput: EventEmitter<number> = new EventEmitter();

  changeProgress(val:number){
    if(this.progress >= 100 && val >= 0){
        this.progressOutput.emit(100);
        this.progress = 100;
        return;
    }

    if(this.progress <= 0 && val < 0){
      this.progressOutput.emit(0);
      this.progress = 0;
      return;
    }

    this.progress += val;
    this.progressOutput.emit(this.progress);
  }
}
