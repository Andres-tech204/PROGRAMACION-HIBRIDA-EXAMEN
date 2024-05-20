import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';
import { addIcons } from 'ionicons';
import { add, camera } from 'ionicons/icons';
import { Notificacion } from 'src/app/Modelo/Notificacion';
import {IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-agregar-notifi',
  templateUrl: './agregar-notifi.component.html',
  styleUrls: ['./agregar-notifi.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class AgregarNotifiComponent  implements OnInit {
  
  tituloStr: string = ""
  descripcionStr: string = ""
  foto: string | undefined

  @Output() onCreate = new EventEmitter<Notificacion>()
  mensaje: any = {};

  constructor(private router: Router) { addIcons({ add, camera })}

  ngOnInit() {
    this.foto = "https://memeheist.com/wp-content/uploads/2023/09/No-Bitches-%E2%80%93-Megamind-Meme-Template.jpg"    
  }

  onClick() {
    const notificacion: Notificacion = {
      id: 1,
      Titulo: this.tituloStr,
      imagen: this.foto,
      Descripcion: this.descripcionStr
    }
    this.onCreate.emit(notificacion)
    this.router.navigate(['home'])
  }

  async TomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false, 
      resultType: CameraResultType.DataUrl
    })
    this.foto = image.dataUrl
    this.mensaje.image = this.foto
  }
}
