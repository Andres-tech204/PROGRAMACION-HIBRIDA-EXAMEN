import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular/standalone';
import { Notificacion } from 'src/app/Modelo/Notificacion';
import { NotificacionesService } from 'src/app/servicios/notificaciones.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-lista-notificaciones',
  templateUrl: './lista-notificaciones.component.html',
  styleUrls: ['./lista-notificaciones.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ListaNotificacionesComponent  implements OnInit {
  @Input() notificacion: Notificacion[] = []

  id: number = 0
  tituloStr: any;
  tomarFoto: any;
  foto: any;
  mensaje: any;
  descripcionStr: any;
  onClick: any;

  constructor(
    private notifiService: NotificacionesService,
    private modalController: ModalController
  ) { }

  ngOnInit() {}

  async ionViewWillEnter() {
    this.notificacion = await this.notifiService.showNotificaciones()
  }

  async borrarNotificacion(id: number) {
    await this.confirmModal()
    this.id = id
    await this.ionViewWillEnter()
  }
  async confirmModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    })

    modal.onDidDismiss().then((result) => {
      if (result.role === 'confirmed') {
        this.notifiService.borrarNotificaciones(this.id)
        location.reload()
      }
    })
    return await modal.present()
  }
}
