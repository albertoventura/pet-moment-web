import { ViewerService } from './service/viewer.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './model/viewer.model';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  data?: Data;
  isLoading: boolean;

  constructor(private viewerService: ViewerService) {
    this.isLoading = true;
  }

  ngOnInit(): void {
    //this.get();
    this.viewerService.getValue().subscribe((value) => {
      console.log('@@@@@@@@@@@@', value);
      this.get();
    });
  }

  get(){
    this.isLoading = true;
    let data = new Data();
    this.viewerService.get().subscribe(
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
}
