import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgService } from '../../services/img/img.service';
import { Image } from '../../models/image.model';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { ImgContainerComponent } from './components/img-container/img-container.component';
import { NewimageFormComponent } from './components/newimage-form/newimage-form.component';
declare var bootstrap: any;

@Component({
  selector: 'app-main',
  imports: [CommonModule, AddButtonComponent, ImgContainerComponent, NewimageFormComponent ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  newImageModalId:number=1; //las imagenes se numeran desde el 1//

  imgArray:Image[]=[]; //arreglo donde guardar las imagenes// 
  imageModal: string | undefined;
  showModal: boolean = false;

  constructor(private imgService:ImgService){ //inyectar el uso del servicio//


  }
  ngOnInit(): void {
    this.imgArray = this.imgService.getImages();
  }

  loadImages(): void{
    this.imgArray = this.imgService.getImages();
  }

  onImageDeleted(id: number): void{
    this.imgService.deleteImageID(id);
    this.loadImages();
  }

  openModal(): void {
    const modalElement = document.getElementById('modalID');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    } else {
      console.error('No se encontró el modal con id "modalID"');
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('modalID');
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    modalInstance?.hide();
  }

  

}
