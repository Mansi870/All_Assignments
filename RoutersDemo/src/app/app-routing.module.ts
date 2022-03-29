import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { ContactComponent } from './contact/contact.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'employee',
    component: EmployeeDetailsComponent,
  },
  { path: 'productWithID/:id', component: ProductComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'customers1-',
    loadChildren: () =>
      import('./customers1/customers1.module').then((m) => m.Customers1Module),
  },
  {
    path: 'orders1',
    loadChildren: () =>
      import('./orders1/orders1.module').then((m) => m.Orders1Module),
  },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
