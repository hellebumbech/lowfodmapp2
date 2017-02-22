import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoegningComponent } from './soegning/soegning.component';
import { VisningComponent } from './visning/visning.component';
import { VisningResolver } from './visning/visning.resolver';
import { IntoleranceComponent } from './intolerance/intolerance.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registrer',
    component: IntoleranceComponent
  },
  { 
    path: 'soeg', 
    component: SoegningComponent
  },
  { 
    path: 'soeg/foedevare/:id',
    component: VisningComponent,
    resolve: {
      foedevare: VisningResolver
    }
  }
];