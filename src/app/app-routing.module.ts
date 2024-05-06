import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { OfficersListComponent } from './officers-list/officers-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: "",
        component: HomepageComponent
    },
    {
        path: 'companydetails/:id',
        component: CompanyDetailsComponent
    },
    {
      path: 'officerslist/:id',
      component: OfficersListComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
