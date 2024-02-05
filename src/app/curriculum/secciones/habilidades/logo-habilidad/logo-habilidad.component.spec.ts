import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoHabilidadComponent } from './logo-habilidad.component';

describe('LogoHabilidadComponent', () => {
  let component: LogoHabilidadComponent;
  let fixture: ComponentFixture<LogoHabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoHabilidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
