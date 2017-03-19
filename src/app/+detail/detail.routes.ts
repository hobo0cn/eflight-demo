import { DetailComponent } from './detail.component';

export const routes = [
  { path: '', children: [
    { path: '', component: DetailComponent },
    { path: 'result-detail', loadChildren: './+result-detail#ResultDetailModule' }
  ]},
];
