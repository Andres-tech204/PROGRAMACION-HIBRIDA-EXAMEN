import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Notificacion } from 'src/app/Modelo/Notificacion';
import { NotificacionesService } from 'src/app/servicios/notificaciones.service';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';
import { NotifiConfigComponent } from 'src/app/Componentes/notifi-config/notifi-config.component';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.page.html',
  styleUrls: ['./notificacion.page.scss'],
  standalone: true,
  imports: [ NotifiConfigComponent ,IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NotificacionPage implements OnInit {

  notificaciones: Notificacion[] = []

  constructor(private notificacionesService: NotificacionesService) { addIcons({ cameraOutline }) }

  async ngOnInit() {
    this.notificaciones = await this.notificacionesService.showNotificaciones()
  }

}
