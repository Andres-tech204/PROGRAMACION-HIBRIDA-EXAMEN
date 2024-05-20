import { Component, OnInit } from '@angular/core';
import { Notificacion} from '../../Modelo/Notificacion';
import { NotificacionesService } from '../../servicios/notificaciones.service';
import { ListaNotificacionesComponent } from '../lista-notificaciones/lista-notificaciones.component';
import { AgregarNotifiComponent } from '../agregar-notifi/agregar-notifi.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notifi-config',
  templateUrl: './notifi-config.component.html',
  styleUrls: ['./notifi-config.component.scss'],
  standalone: true,
  imports: [ListaNotificacionesComponent, AgregarNotifiComponent, CommonModule, FormsModule, IonicModule]
})
export class NotifiConfigComponent  implements OnInit {

  listaNotifi:Notificacion[] = []

  constructor(
    private notifiService:NotificacionesService
  ) { }

  async ngOnInit() {
    await this.notifiService.iniciarPlugin()
    await this._actualizar()
  }

  async _actualizar() {
    this.listaNotifi = await this.notifiService.showNotificaciones()
  }

  async onCreateNotificacion($event: Notificacion) {
    const notificacion:Notificacion = {id:1, Titulo: $event.Titulo, imagen: $event.imagen, Descripcion: $event.Descripcion,fecha: $event.fecha}
    await this.notifiService.AgregarNotificacion(notificacion)
    await this._actualizar()
  }
}

  


