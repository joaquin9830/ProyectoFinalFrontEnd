import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';
import { persona } from '../../../app/model/persona.model'
@Component({
  selector: 'app-logo-yo',
  templateUrl: './logo-yo.component.html',
  styleUrls: ['./logo-yo.component.css']
})
export class LogoYoComponent implements OnInit {
  persona: persona = new persona('','','');
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
