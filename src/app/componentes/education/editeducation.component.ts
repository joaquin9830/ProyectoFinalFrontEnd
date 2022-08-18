import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducation',
  templateUrl: './editeducation.component.html',
  styleUrls: ['./editeducation.component.css']
})
export class EditeducationComponent implements OnInit {
  educacion: Educacion = null;
  constructor(private educacionS:EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err =>{
        alert("Error al editar educación");
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionS.update(id,this.educacion).subscribe(data => {
      alert("Edición añadida correctamente")
      this.router.navigate(['']);
    },err =>{
      alert("Error al editar educación");
      this.router.navigate(['']);
    }
    )
  }
}
