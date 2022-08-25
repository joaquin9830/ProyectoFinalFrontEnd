import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
 proyectos: Proyectos[] = [];
  constructor(private proyectosS: SProyectosService, private tokenService: TokenService) { }
  
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectosS.lista().subscribe(
      data =>{
        this.proyectos = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectosS.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err =>{
          alert("No se pudo eliminar")
        }
      )
    }
  }

}
