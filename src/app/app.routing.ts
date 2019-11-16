import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './modules/authentication/login/login.component';
import { TimelineComponent } from './modules/timeline/timeline.component';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
