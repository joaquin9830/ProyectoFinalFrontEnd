import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SSoftskill } from 'src/app/model/s-softskill';
import { SSkillsService } from 'src/app/service/s-skills.service';


@Component({
  selector: 'app-newsoftskill',
  templateUrl: './newsoftskill.component.html',
  styleUrls: ['./newsoftskill.component.css']
})
export class NewsoftskillComponent implements OnInit {

  nombreS: string = '';
  descripcionS: number ;
  constructor(private sSkills: SSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skills = new SSoftskill(this.nombreS, this.descripcionS);
    this.sSkills.save(skills).subscribe(
      data => {
        alert('Skill añadido');
        this.router.navigate(['']);
      },
      err => {
        alert('Falló');
        this.router.navigate(['']);
      }
    )
  }

}
