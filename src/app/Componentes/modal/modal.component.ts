import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})
export class ModalComponent  implements OnInit {

  constructor( private modalController: ModalController ) { }

  confirmarBorrar(){
    this.modalController.dismiss(
      "", 'confirmed'
    );
  }

  cerrarModal(){
    this.modalController.dismiss()
  }

  ngOnInit() {}

}
