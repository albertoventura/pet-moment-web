import { routerLabels } from './../../constants/router-labels';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isToShowDog: boolean;
  constructor(
    private dataService: DataService,
    private route: Router,
  ) {
    this.isToShowDog = true;
  }

  ngOnInit(): void {
  }

  onToggle(event: any){
    this.isToShowDog = event.checked
    this.dataService.onToggleChange(this.isToShowDog);
    this.dataService.setValue(event.checked);
  }

  goToExplorePage(){
    this.route.navigate([routerLabels.explore]);
  }
  goToFavsPage(){
    this.route.navigate([routerLabels.favs]);
  }

}
