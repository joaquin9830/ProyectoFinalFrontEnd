import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-editabout',
  templateUrl: './editabout.component.html',
  styleUrls: ['./editabout.component.css']
})
export class EditaboutComponent implements OnInit {
  about: About = null;
  constructor(
    private aboutS: AboutService, 
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.aboutS.details(id).subscribe(
      data => {
        this.about = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params["id"];
    this.aboutS.update(id,this.about).subscribe(
      data => {
        alert("About modificado correctamente!");
        this.router.navigate(['']);
      }, err =>{
        alert("Error al editar about");
        this.router.navigate(['']);
      }
    )
  }

}
