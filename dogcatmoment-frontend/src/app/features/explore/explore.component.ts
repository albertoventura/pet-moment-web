import { LocalstorageService } from './../../core/services/localstorage.service';
//import { dataService } from './service/viewer.service';
import { Component, OnInit } from '@angular/core';
import { copyImageToClipboard } from 'copy-image-clipboard'
import { DataService } from 'src/app/core/services/data.service';
import { Data } from 'src/app/core/models/data.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  dataSaved: boolean;
  data?: Data;
  isLoading: boolean;
  hasImg: boolean;
  breedList: string[] = [];

  constructor(
    private dataService: DataService,
    private localstorageService: LocalstorageService,
  ) {
    this.isLoading = true;
    this.hasImg = false;
    this.dataSaved = false;
  }

  ngOnInit(): void {
    this.dataService.getValue().subscribe((value) => {
      this.getImage();
    });
    this.getBreedList();
  }

  getImage(){
    this.dataSaved = false;
    this.isLoading = true;
    let data = new Data();
    this.dataService.getImages().subscribe(
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
    this.dataService.getBreedList().subscribe(
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
