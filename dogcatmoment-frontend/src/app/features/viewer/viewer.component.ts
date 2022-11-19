import { LocalstorageService } from './../../core/services/localstorage.service';
import { ViewerService } from './service/viewer.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './model/viewer.model';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {
  dataSaved: boolean;
  data?: Data;
  isLoading: boolean;
  breedList: string[] = [];

  constructor(
    private viewerService: ViewerService,
    private localstorageService: LocalstorageService,
  ) {
    this.isLoading = true;
    this.dataSaved = false;
  }

  ngOnInit(): void {
    //this.get();
    console.log('all?', this.localstorageService.getAllWithoutId());

    this.viewerService.getValue().subscribe((value) => {
      console.log('@@@@@@@@@@@@', value);
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
        console.log('animal', a);
        console.log('breeds', a[0]?.breeds[0]);
        data.id = a[0]?.id;
        data.img = a[0]?.url;
        data.width = a[0]?.width;
        data.height = a[0]?.height;
        data.breedName = a[0]?.breeds[0]?.name;
        data.breedDescription = a[0]?.breeds[0]?.description;
        data.breedTemperament = a[0]?.breeds[0]?.temperament;
        this.data = data;
        console.log('data', this.data);
        this.isLoading = false;

        //this.dogs = a;
        //this.dogs = a
        //console.log(this.dogs[0]);

      }
    );
  }
  getBreedList(){
    this.viewerService.getBreedList().subscribe(
      (breeds) => {
        //console.log('breedsssss', breeds);
        breeds.forEach( breed => {
          this.breedList.push(breed.name)
        })
        //this.dogs = a;
        //this.dogs = a
        //console.log(this.dogs[0]);
        console.log('breedlist', this.breedList);
      }
    );
  }
  saveDataOnLocalstorage(){
    this.dataSaved = true;
    console.log(this.data?.id!, this.data);

    this.localstorageService.set(this.data?.id!, this.data);
  }
}
