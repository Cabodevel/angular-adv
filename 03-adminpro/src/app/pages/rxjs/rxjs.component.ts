import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements  OnDestroy {
  private intervalObsSubs: Subscription;
  private subs2: Subscription;

  ngOnDestroy(): void {
    this.intervalObsSubs.unsubscribe();
    this.subs2.unsubscribe();
  }

  constructor(){

    this.intervalObsSubs= this.returnInterval().subscribe({
      next(value) { console.log(value) }
    })

    this.subs2 = this.returnObs().pipe(
      retry(1)
    ).subscribe({
      next(value) { console.log("Subs", value) },
      error(error) { console.error(error) },
      complete() { console.info("end obs") }
    });

  }

  returnInterval(): Observable<number> {
    return interval(1000).pipe(
      take(100),
      map( val => val + 1),
      filter(val => val % 2 === 0),
    );
  }

  returnObs(): Observable<number> {
    let i = -1;

    return new Observable<number>(observer => {

      const interv = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interv);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error("error 2")
        }
      }, 1000);
    });
  }
}