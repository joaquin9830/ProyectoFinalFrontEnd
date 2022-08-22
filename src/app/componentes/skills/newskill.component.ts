import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-newskill',
  templateUrl: './newskill.component.html',
  styleUrls: ['./newskill.component.css']
})
export class NewskillComponent implements OnInit {
  nombreE: string = '';
  descripcionE: number;
  constructor(private skillS: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const skill = new Skills(this.nombreE, this.descripcionE);
    this.skillS.save(skill).subscribe(
      data =>{
        alert("Skill añadido");
        this.router.navigate(['']);
      },err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
