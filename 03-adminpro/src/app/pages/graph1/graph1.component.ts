import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component {
  labels1: string[] = [ 'Sales', 'In-Store', 'Mail-Orders' ];
  labels2: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 300, 400, 200 ],
        backgroundColor:  [ '#6857E6', '#009FEE', '#F02059']
      },
    ]
  };
  data2: ChartData<'doughnut'> = {
    labels: this.labels2,
    datasets: [
      { data: [ 650, 550, 10 ],
        backgroundColor:  [ '#6857E6', '#009FEE', '#F02059']
      },
    ]
  };
}
