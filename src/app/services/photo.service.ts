import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage-angular';

@Injectable()
class Photo {
  data: any;
}
export class PhotoService {
  public photos: Photo[] = [];
  constructor(private camera: Camera, private storage: Storage) {}
  getCamera() {
    const cameraOptions: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
    };
    this.camera
      .getPicture(cameraOptions)
      .then((res) => {
        console.log(res);
        this.photos.unshift({
          data: 'data:image/jpeg;base64,' + res,
        });
        this.storage.set('photos', this.photos);
      })
      .catch((err) => {
        console.log('Camera issue: ' + err);
      });
  }

  getGallery() {
    const galleryOptions: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
    };
    this.camera
      .getPicture(galleryOptions)
      .then((res) => {
        console.log(res);
        this.photos.unshift({
          data: 'data:image/jpeg;base64,' + res,
        });
        this.storage.set('photos', this.photos);
      })
      .catch((err) => {
        console.log('Camera issue: ' + err);
      });
  }
  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }
}
