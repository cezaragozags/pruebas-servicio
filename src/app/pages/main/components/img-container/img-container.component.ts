import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Image } from '../../../../models/image.model';

@Component({
  selector: 'app-img-container',
  imports: [],
  templateUrl: './img-container.component.html',
  styleUrl: './img-container.component.css'
})
export class ImgContainerComponent {
      @Input() images: Image[] = []
      @Output() imageDeleted = new EventEmitter<number>(); //emitira el id de la imagen

      deleteImage(id: number): void {
        this.imageDeleted.emit(id);

      }
}
