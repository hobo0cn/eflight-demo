import { Routes } from '@angular/router';
// import { HomeComponent } from './home';
// import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import {LoginComponent} from './login'
import {DashboardComponent} from './dashboard'
import {AreaSelectComponent} from './area-select'
import {ServiceSelectComponent} from './service-select'
import {ServiceRequestComponent} from './service-request'
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'area-select',  component: AreaSelectComponent },
  { path: 'service-select',  component: ServiceSelectComponent },
  { path: 'service-request',  component: ServiceRequestComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'detail/:id', loadChildren: './+detail#DetailModule'},
  // { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
