import { Route } from '@angular/router';
import { TimesheetComponent } from './timesheet.component';

export const TIMESHEET_ROUTE: Route[] = [
  {
    path: '',
    component: TimesheetComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
