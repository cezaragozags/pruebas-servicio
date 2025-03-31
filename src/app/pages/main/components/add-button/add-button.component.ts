import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  imports: [],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
  @Input() modalID!:number; 
  @Output() open = new EventEmitter<void>();

  onClick(): void {
    this.open.emit();
  }

}
