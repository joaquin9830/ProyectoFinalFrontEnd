import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SSoftskill } from 'src/app/model/s-softskill';
import { SSkillsService } from 'src/app/service/s-skills.service';

@Component({
  selector: 'app-editsoft',
  templateUrl: './editsoft.component.html',
  styleUrls: ['./editsoft.component.css']
})
export class EditsoftComponent implements OnInit {

  Skillss: SSoftskill = null;

  constructor(
    private skillS: SSkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data => {
        this.Skillss = data;
       
      },err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.Skillss).subscribe(
      data => { 
        alert("Proyecto editado correctamente")
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar skill")
        this.router.navigate(['']);
      }
    )
  }



}
