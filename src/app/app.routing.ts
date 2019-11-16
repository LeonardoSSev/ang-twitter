import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/authentication/login/login.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
