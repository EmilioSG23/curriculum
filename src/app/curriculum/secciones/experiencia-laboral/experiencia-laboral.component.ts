import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../shared/header-section/header-section.component';
import {datos} from './experiencia';

@Component({
  selector: 'experiencia-seccion',
  standalone: true,
  imports: [HeaderSectionComponent],
  templateUrl: './experiencia-laboral.component.html',
  styleUrl: './experiencia-laboral.component.css'
})
export class ExperienciaLaboralComponent {
  experiencias: any[] = datos;
}
