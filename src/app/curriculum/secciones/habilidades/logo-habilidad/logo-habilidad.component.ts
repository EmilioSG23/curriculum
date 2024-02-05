import { Component, Input } from '@angular/core';

@Component({
  selector: 'logo-habilidad',
  standalone: true,
  imports: [],
  templateUrl: './logo-habilidad.component.html',
  styleUrl: './logo-habilidad.component.css'
})
export class LogoHabilidadComponent {
  @Input() logo: string | undefined;
  nombre: string | undefined;

  ngOnInit(){
    if(this.logo){
      const parte = this.logo.split("/")[1];
      this.nombre = parte.charAt(0).toUpperCase() + parte.substring(1,);
    }
  }
}
