import { Injectable } from '@angular/core';
import { Image } from '../../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImgService {
  private storageKey = 'images';
  constructor() { }

/**
 * 
 * @returns vector con todas las imagenes guardadas en localstorage
 */

  getImages(): Image[]{
    const storedImages = localStorage.getItem(this.storageKey);
    let images: Image[] = [];
    if (storedImages){
      images = JSON.parse(storedImages) as Image[];
    }
    return images;
  }

  /**
   * 
   * @param name nombre de la imagen
   * @param src 
   */

  saveImage(name:string, src:string):void{
    let images = this.getImages();
    const newImage: Image={
      id_image: images.length>0 ? images[images.length-1].id_image + 1 :1,
      name,
      src
    };
    images.push(newImage)
    localStorage.setItem(this.storageKey,JSON.stringify(images));
  }

  deleteImageByID(id_image:number):void{
    let images= this.getImages();
    images=images.filter(img=>img.id_image!==id_image)
    localStorage.setItem(this.storageKey, JSON.stringify(images));
  }

}
