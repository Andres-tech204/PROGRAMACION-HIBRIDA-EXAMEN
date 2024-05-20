import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListaNotificacionesComponent } from './lista-notificaciones.component';

describe('ListaNotificacionesComponent', () => {
  let component: ListaNotificacionesComponent;
  let fixture: ComponentFixture<ListaNotificacionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ListaNotificacionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
