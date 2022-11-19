import { routerLabels } from './../../constants/router-labels';
import { ViewerService } from './../../../features/viewer/service/viewer.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isToShowDog: boolean;
  constructor(
    private viewerService: ViewerService,
    private route: Router,
  ) {
    this.isToShowDog = true;
  }

  ngOnInit(): void {
  }

  onToggle(event: any){
    this.isToShowDog = event.checked
    this.viewerService.onToggleChange(this.isToShowDog);
    this.viewerService.setValue(event.checked);
  }

  goToExplorePage(){
    this.route.navigate([routerLabels.explore]);
  }
  goToFavsPage(){
    this.route.navigate([routerLabels.favs]);
  }

}
