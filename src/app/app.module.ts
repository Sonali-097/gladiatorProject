import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { GenderPipe } from './pipes/gender.pipe';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import {UserComponent} from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { BindingDemoComponent } from './components/binding-demo/binding-demo.component';
 
 
 
 

 

 

 
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmployeeComponent,
    GenderPipe,
    EmployeelistComponent,
    ReactiveFormComponent,
    UserComponent,
    AddUserComponent,
    NgclassdemoComponent,
    BindingDemoComponent
 
    
   
  
 
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
