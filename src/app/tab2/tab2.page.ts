import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  // public currentImage: string;
  constructor(private camera: Camera, public photoService: PhotoService) {}
  ngOnInit() {
    this.photoService.loadSaved();
  }
  // takePicture() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //   };

  //   this.camera.getPicture(options).then(
  //     (imageData) => {
  //       this.currentImage = 'data:image/jpeg;base64,' + imageData;
  //     },
  //     (err) => {
  //       // Handle error
  //       console.log('Camera issue:' + err);
  //     }
  //   );
  // }
}
