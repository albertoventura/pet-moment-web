import { ViewerService } from './service/viewer.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './model/viewer.model';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  dogs: Data[] = [];

  constructor(private viewerService: ViewerService) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.viewerService.get().subscribe(
      (a) => {
        console.log('a', a);
        this.dogs = a;
        //this.dogs = a
        console.log(this.dogs[0]);

      }
    );
  }
}
