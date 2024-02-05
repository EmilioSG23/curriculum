import { Component } from '@angular/core';
import { ProyectosComponent } from './secciones/proyectos/proyectos.component';
import { QuienSoyComponent } from './secciones/quien-soy/quien-soy.component';
import { EducacionComponent } from './secciones/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './secciones/experiencia-laboral/experiencia-laboral.component';
import { HabilidadesComponent } from './secciones/habilidades/habilidades.component';
import { ContactameComponent } from './secciones/contactame/contactame.component';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [QuienSoyComponent, EducacionComponent, ExperienciaLaboralComponent, HabilidadesComponent, ProyectosComponent, ContactameComponent],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {

}
