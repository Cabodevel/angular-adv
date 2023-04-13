import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/dist/helpers/helpers.options';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit{
  ngOnInit(): void {
    const promise = new Promise((resolve)=> {
      resolve('hey')
    });

    promise.then((res) => {
      console.log(res)
    })
  }

  
}
