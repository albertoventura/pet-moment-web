import { LocalstorageService } from './../../core/services/localstorage.service';
//import { dataService } from './service/viewer.service';
import { Component, OnInit } from '@angular/core';
import { copyImageToClipboard } from 'copy-image-clipboard'
import { DataService } from 'src/app/core/services/data.service';
import { Data } from 'src/app/core/models/data.model';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar
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
    //let data = new Data();
    this.dataService.getImages().subscribe(
      (dataFromApi) => {
        /* data.id = a[0]?.id;
        data.img = a[0]?.url;
        data.width = a[0]?.width;
        data.height = a[0]?.height;
        data.breedName = a[0]?.breeds[0]?.name;
        data.breedDescription = a[0]?.breeds[0]?.description;
        data.breedTemperament = a[0]?.breeds[0]?.temperament;
        this.data = data; */
        this.data = this.dataService.buildObject(dataFromApi);
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
  saveOrDeleteDataOnLocalstorage(data: Data){
    data.isSaved = !data.isSaved;
    if(data.isSaved) {
      this.saveOnLocalstorage(data);
    }else{
      this.deleteFromLocalstorage(this.data!);
    }
  }
  saveOnLocalstorage(data: Data){
    this.localstorageService.set(data?.id!, data);
    this.showSnackBar('Your image was saved!', 'Ok!');
  }
  deleteFromLocalstorage(data: Data){
    this.localstorageService.delete(data?.id!);
    this.showSnackBar('Your image was unsaved!', 'Ok!');
  }
  showSnackBar(msg: string, action: string, duration:number = 3000){
    this._snackBar.open(msg, action, {
      duration: duration,
    });
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
