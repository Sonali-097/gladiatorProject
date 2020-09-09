import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{  EmployeeComponent} from './components/employee/employee.component';
import{ HomeComponent} from './components/home/home.component';
import{ AboutComponent} from './components/about/about.component';
import {  EmployeelistComponent} from './components/employeelist/employeelist.component'
import {  ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent} from './components/add-user/add-user.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
 
 

 
 
 
 
 

const routes: Routes = [

  { path: '', component: HomeComponent },
  
  { path: 'about', component: AboutComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'list', component: EmployeelistComponent},
  { path: 'ReactiveForm', component:ReactiveFormComponent},
  {path: 'UserSer', component:UserComponent},
  { path: 'adduser', component: AddUserComponent },
  {path: 'style', component: NgclassdemoComponent},
  {path: 'binding', component: BindingDemoComponent},
 
 
 

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
