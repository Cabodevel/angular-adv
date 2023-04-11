import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit{
  
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input('progress') progress: number = 50;
  @Input() btnClass: string = "btn btn-primary";
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

  onChange(value:number){
    if(value > 100){
      this.progress  = 100;
    }else if(value < 0){
      this.progress = 0;
    }else{
      this.progress = value;
    }


    this.progressOutput.emit(this.progress);
  }
}
