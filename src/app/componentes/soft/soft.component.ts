import { Component, OnInit } from '@angular/core';
import { SSoftskill } from 'src/app/model/s-softskill';
import { SSkillsService } from 'src/app/service/s-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css']
})
export class SoftComponent implements OnInit {
  skill: SSoftskill[]=[];
  constructor(private sSkills: SSkillsService, private tokenService: TokenService) { }


  isLogged = false;
  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarSkills(): void {
    this.sSkills.lista().subscribe(data => { this.skill = data; })
  }
  delete(id?: number){
    if(id != undefined){
      this.sSkills.delete(id).subscribe(
        data => {
          this.cargarSkills();
        }, err => {
          alert("No se pudo borrar soft skill");
        }
      )
    }
  }

}
