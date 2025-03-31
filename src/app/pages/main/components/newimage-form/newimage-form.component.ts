import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { ImgService } from '../../../../services/img/img.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-newimage-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './newimage-form.component.html',
  styleUrl: './newimage-form.component.css'
})
export class NewimageFormComponent {
  @Input() modalID!: string;
  imageUrl: string | null = '';
  imageName: string = '';

  @Output() reloadImg = new EventEmitter<void>();
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  constructor(private imgService: ImgService) {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl = reader.result as string;
        this.imageName = file.name;
      };

      reader.readAsDataURL(file);
    }
  }

  saveImage(): void {
    if (!this.imageUrl){
      alert('Selecciona una imagen antes de guardar.');
      return;
    }

    this.imgService.saveImage(this.imageName, this.imageUrl);
    this.loadImages();
    this.imageUrl = null;
    this.imageName = '';
    this.close.emit();
  }

  loadImages(): void {
    this.reloadImg.emit();
  }
}