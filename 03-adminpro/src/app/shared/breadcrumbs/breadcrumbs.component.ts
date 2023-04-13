import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public pageTitle: string;
  public routeDataSubs: Subscription;

  constructor(private router: Router) {
    this.getRouterData();
  }
  ngOnDestroy(): void {
    this.routeDataSubs.unsubscribe();
  }

  getRouterData() {
    this.routeDataSubs = this.router.events
      .pipe(
        filter<any>(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map(event => event.snapshot.data)
      )
      .subscribe(
        ({ title }) => {
          document.title = title;
          this.pageTitle = title
        }
      );
  }
}
