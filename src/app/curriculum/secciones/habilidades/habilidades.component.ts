import { Component } from '@angular/core';
import { HeaderSectionComponent } from '../shared/header-section/header-section.component';
import { LogoHabilidadComponent } from './logo-habilidad/logo-habilidad.component';

@Component({
  selector: 'habilidades-seccion',
  standalone: true,
  imports: [HeaderSectionComponent, LogoHabilidadComponent],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent {
}
