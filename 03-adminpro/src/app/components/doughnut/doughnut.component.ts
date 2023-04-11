import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {
  @Input() header: string = ""
  @Input() labels: string[] = [ 'Label 1', 'Label 2', 'Label 3' ];
  @Input() data: ChartData<'doughnut'> = {
    labels: this.labels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor:  [ '#6857E6', '#009FEE', '#F02059']
      },
    ]
  };
}
