import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { Notificacion } from '../Modelo/Notificacion';
import { NotificacionesService } from '../servicios/notificaciones.service';
import { addIcons } from 'ionicons';
import { add, addCircle, trash } from 'ionicons/icons';
import { ListaNotificacionesComponent } from '../Componentes/lista-notificaciones/lista-notificaciones.component';
import { NotifiConfigComponent } from '../Componentes/notifi-config/notifi-config.component';
import { RouterModule } from '@angular/router';
import { AgregarNotifiComponent } from '../Componentes/agregar-notifi/agregar-notifi.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [NotifiConfigComponent, IonFab, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, AgregarNotifiComponent, ListaNotificacionesComponent, IonButtons, IonButton, IonIcon, RouterModule ],
})
export class HomePage {
  notificacion:Notificacion[] = []
  listaNotificaciones:Notificacion[] = []

  constructor(
    private notifiService:NotificacionesService
  ){
    addIcons({ addCircle, trash, add})
  }

  async _actualizar(){
    this.listaNotificaciones = await this.notifiService.showNotificaciones()
  }

  async ngOnInit(): Promise<void> {
    await this.notifiService.iniciarPlugin()
    await this._actualizar()
  }

  async ionViewWillEnter(){
    await this._actualizar()
  }
}
