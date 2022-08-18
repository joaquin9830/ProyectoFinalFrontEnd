import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/service/about.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { persona } from '../../../app/model/persona.model';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, } from '@angular/fire/storage';
import { group } from '@angular/animations';



@Component({
  selector: 'app-logo-yo',
  templateUrl: './logo-yo.component.html',
  styleUrls: ['./logo-yo.component.css']
})
export class LogoYoComponent implements OnInit {
  about: About[] = [];
  images: string[];
  persona: persona = new persona('', '', '');
  constructor(public personaService: PersonaService, private aboutS: AboutService, private tokenService: TokenService,private storage:Storage) { 
    this.images  = [];
  }
  isLogged = false;
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data });
    this.cargarAbout();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.getImages()
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
  uploadImage($event:any){
    const file = $event.target.files[0];
    
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
      })
      .catch(error => console.log(error));

  }
  getImages(){
    const imagesRef = ref(this.storage,'images');

    listAll(imagesRef)
      .then(async response =>{
        console.log(response);
        this.images = [];
        for(let item of response.items){
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch(error => console.log(error));

  }

 
}
