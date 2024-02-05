import { Component, Input } from '@angular/core';

@Component({
  selector: 'proyecto',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() id: string | undefined;
  @Input() nombre:string | undefined;
  @Input() link: string | undefined;
  @Input() descripcion: string | undefined;
  @Input() lenguajes: string | undefined;
  @Input() usos: string | undefined;
  @Input() imagen: string | undefined;
}
