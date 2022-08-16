import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { persona } from '../../../app/model/persona.model'
@Component({
  selector: 'app-logo-yo',
  templateUrl: './logo-yo.component.html',
  styleUrls: ['./logo-yo.component.css']
})
export class LogoYoComponent implements OnInit {
  about: About[] = [];
  persona: persona = new persona('', '', '');
  constructor(public personaService: PersonaService, private aboutS: AboutService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data });
    this.cargarAbout();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarAbout(): void {
    this.aboutS.lista().subscribe(
      data => {
        this.about = data;
      }
    )
  }

  borrar(id?:number){
    if(id !== undefined){
      this.aboutS.delete(id).subscribe(
        data => {
          this.cargarAbout();
        },error => {
          alert("No se pudo eliminar acerca de mí")
        }
      )
    }
  }

}
