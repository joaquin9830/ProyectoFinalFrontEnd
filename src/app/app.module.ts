import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoYoComponent } from './componentes/logo-yo/logo-yo.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducationComponent } from './componentes/education/education.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectsComponent } from './componentes/proyects/proyects.component';
import { BarComponent } from './componentes/bar/bar.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experience/new-experiencia.component';
import { EditExperienceComponent } from './componentes/experience/edit-experience.component';
import { NeweducacionComponent } from './componentes/education/neweducacion.component';
import { EditeducationComponent } from './componentes/education/editeducation.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewaboutComponent } from './componentes/logo-yo/newabout.component';
import { EditaboutComponent } from './componentes/logo-yo/editabout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoYoComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    BarComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienceComponent,
    NeweducacionComponent,
    EditeducationComponent,
    NewaboutComponent,
    EditaboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
    
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
