import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet ,RouterLink],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a routerLink="timesheet"  >
      TIMESHEET
    </a>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Angular';
}

// In the main application:
export const ROUTES: Route[] = [
  {path: 'timesheet', loadChildren: () => import('./timesheet/timesheet.route').then(mod => mod.TIMESHEET_ROUTE)},

];

bootstrapApplication(App, {
  providers: [provideRouter(ROUTES)],
});
