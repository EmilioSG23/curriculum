import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../shared/header-section/header-section.component';

@Component({
  selector: 'quien-soy-seccion',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.css'
})
export class QuienSoyComponent {

}
