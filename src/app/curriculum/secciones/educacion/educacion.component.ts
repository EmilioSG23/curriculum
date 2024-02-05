import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../shared/header-section/header-section.component';
import {instituciones} from "../educacion/educacion"

@Component({
  selector: 'educacion-seccion',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {
  instituciones: any[] = instituciones;
}
