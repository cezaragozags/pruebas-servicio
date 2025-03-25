import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  newImageModalId:number=1; //las imagenes se numeran desde el 1//

  imgArray:Image[]=[]; //arreglo donde guardar las imagenes//

  constructor(private imgService:ImgService){ //inyectar el uso del servicio//


  }
  ngOnInit(): void {
    this.imgArray = this.imgService.getImages(); //obtener imagenes del servicio//
                                            //guardarla en el arreglo imgArray//
  }

}
