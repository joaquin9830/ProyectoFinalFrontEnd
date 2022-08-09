import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/componentes/home/home.component';
import { NeweducacionComponent } from './componentes/education/neweducacion.component';
import { EditExperienceComponent } from './componentes/experience/edit-experience.component';
import { NewExperienciaComponent } from './componentes/experience/new-experiencia.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienceComponent},
  {path: 'nuevaedu', component:NeweducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
