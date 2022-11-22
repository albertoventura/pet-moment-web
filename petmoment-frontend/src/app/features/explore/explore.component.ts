import { LocalstorageService } from './../../core/services/localstorage.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { copyImageToClipboard } from 'copy-image-clipboard'
import { DataService } from 'src/app/core/services/data.service';
import { Data } from 'src/app/core/models/data.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit, OnDestroy {

  dataSaved: boolean;
  data?: Data;
  isLoading: boolean;
  hasImg: boolean;
  breedList: string[] = [];
  isToShowDog!: boolean;
  subs = new Subscription();

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

    this.subs.add(
      this.dataService.getValue().subscribe((value) => {
        this.getAnimalChoice();
        this.dataService.setAnimalToggle(this.isToShowDog);
        this.getImage();
      })
    );
    //this.getBreedList();
  }

  getImage(){
    this.dataSaved = false;
    this.isLoading = true;
    this.subs.add(
      this.dataService.getImages().subscribe(
        (dataFromApi) => {
          this.data = this.dataService.buildObject(dataFromApi);
          this.isLoading = false;
          this.hasImg = true;
        }
      )
    );
  }
  getBreedList(){
    this.subs.add(
      this.dataService.getBreedList().subscribe(
        (breeds) => {
          breeds.forEach( breed => {
            this.breedList.push(breed.name)
          })
        }
      )
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

  onToggleAnimal(value: any){
    switch(value){
      case 'dog':
        this.isToShowDog = true;
        break;
      case 'cat':
        this.isToShowDog = false;
        break;
    }
    this.saveCurrentAnimalChoice();
    this.dataService.onToggleChange(this.isToShowDog);
    this.dataService.setValue(this.isToShowDog);
  }
  saveCurrentAnimalChoice(){
    this.localstorageService.set('isToShowDog', this.isToShowDog);
  }
  getAnimalChoice(){
    this.isToShowDog = this.localstorageService.get('isToShowDog');
    console.log('istoShowDog?', this.isToShowDog);

  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
