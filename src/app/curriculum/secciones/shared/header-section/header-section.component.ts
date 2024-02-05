import { Component,Input } from '@angular/core';

@Component({
  selector: 'header-section',
  standalone: true,
  imports: [],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {
  @Input() titulo: string | undefined;
  @Input() descripcion: string | undefined;
}
