import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/componentes/home/home.component';
import { EditeducationComponent } from './componentes/education/editeducation.component';
import { NeweducacionComponent } from './componentes/education/neweducacion.component';
import { EditExperienceComponent } from './componentes/experience/edit-experience.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { NewExperienciaComponent } from './componentes/experience/new-experiencia.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditaboutComponent } from './componentes/logo-yo/editabout.component';
import { LogoYoComponent } from './componentes/logo-yo/logo-yo.component';
import { NewaboutComponent } from './componentes/logo-yo/newabout.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp',component: NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienceComponent},
  {path: 'nuevaedu', component:NeweducacionComponent},
  {path:'editeduca/:id', component:EditeducationComponent},
  {path:'aboutm', component:LogoYoComponent},
  {path:'expe', component:ExperienceComponent},
  {path:'nuevoabout', component:NewaboutComponent},
  {path:'editabout/:id', component:EditaboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
