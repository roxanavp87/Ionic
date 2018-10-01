import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PhotoService } from '../_services';


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
  currentImage: any;
  constructor(public navCtrl: NavController, public photoService: PhotoService) {
  }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  
}
