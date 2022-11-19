import { LocalstorageService } from './../../core/services/localstorage.service';
import { ViewerService } from './service/viewer.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './model/viewer.model';
import { copyImageToClipboard } from 'copy-image-clipboard'
@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  dataSaved: boolean;
  data?: Data;
  isLoading: boolean;
  hasImg: boolean;
  breedList: string[] = [];

  constructor(
    private viewerService: ViewerService,
    private localstorageService: LocalstorageService,
  ) {
    this.isLoading = true;
    this.hasImg = false;
    this.dataSaved = false;
  }

  ngOnInit(): void {
    this.viewerService.getValue().subscribe((value) => {
      this.getImage();
    });
    this.getBreedList();
  }

  getImage(){
    this.dataSaved = false;
    this.isLoading = true;
    let data = new Data();
    this.viewerService.getImages().subscribe(
      (a) => {
        data.id = a[0]?.id;
        data.img = a[0]?.url;
        data.width = a[0]?.width;
        data.height = a[0]?.height;
        data.breedName = a[0]?.breeds[0]?.name;
        data.breedDescription = a[0]?.breeds[0]?.description;
        data.breedTemperament = a[0]?.breeds[0]?.temperament;
        this.data = data;
        this.isLoading = false;
        this.hasImg = true;
      }
    );
  }
  getBreedList(){
    this.viewerService.getBreedList().subscribe(
      (breeds) => {
        breeds.forEach( breed => {
          this.breedList.push(breed.name)
        })
      }
    );
  }
  saveDataOnLocalstorage(){
    this.dataSaved = true;
    this.localstorageService.set(this.data?.id!, this.data);
  }
  copyImage(){
    copyImageToClipboard(this.data?.img!)
      .then(() => {
        console.log('Image Copied')
      })
      .catch((e) => {
        console.log('Error: ', e.message)
      })
  }
}
