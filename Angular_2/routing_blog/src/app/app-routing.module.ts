import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
const routes: Routes = [
  {
    
    component : AboutComponent,
    path:'about',
    children:[
      {path:'company',component:AboutCompanyComponent},
      {path:'me',component:AboutMeComponent},
    ]
  },
  {
    
    component : UserComponent,
    path:'user/:id',
    
  },
  {
    
    component: HomeComponent,
    path:''
  },
  {
    component:NoPageComponent,
    path : '**'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
