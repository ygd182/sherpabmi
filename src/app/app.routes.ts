//app.routes.ts
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full'  },
  { path: 'form', component: FormComponent },
 // { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuardService] }
];

export const RoutingModule = RouterModule.forRoot(routes);