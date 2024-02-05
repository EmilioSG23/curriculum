import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { datos } from '../proyectos/proyectos';
import { HeaderSectionComponent } from '../shared/header-section/header-section.component';

@Component({
  selector: 'proyectos-seccion',
  standalone: true,
  imports: [ItemComponent, HeaderSectionComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  proyectos: any[] = datos;
}
