import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-newabout',
  templateUrl: './newabout.component.html',
  styleUrls: ['./newabout.component.css']
})
export class NewaboutComponent implements OnInit {
  nombreE: string;
  descripcionE: string;


  constructor(private aboutS: AboutService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const about = new About(this.nombreE, this.descripcionE);
    this.aboutS.save(about).subscribe(
      data => {
        alert('Acerca de añadido');
        this.router.navigate(['']);
      }, err =>{
        alert('No se pudo añadir');
        this.router.navigate(['']);
      }
    )
  }
}
