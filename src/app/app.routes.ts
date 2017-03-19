import { Routes } from '@angular/router';
// import { HomeComponent } from './home';
// import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import {LoginComponent} from './login'
import {DashboardComponent} from './dashboard'
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
