import { ViewerService } from './../../../features/viewer/service/viewer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isToShowDog: boolean;
  constructor(private viewerService: ViewerService) {
    this.isToShowDog = true;
  }

  ngOnInit(): void {
  }

  onToggle(event: any){
    console.log(event.checked);
    this.isToShowDog = event.checked

    this.viewerService.onToggleChange(this.isToShowDog);
    this.viewerService.setValue(event.checked);
  }

}
