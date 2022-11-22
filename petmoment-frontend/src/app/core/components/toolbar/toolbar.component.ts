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
  constructor(
    private route: Router,
  ) {
  }

  ngOnInit(): void {
  }

  goToExplorePage(){
    this.route.navigate([routerLabels.explore]);
  }
  goToFavsPage(){
    this.route.navigate([routerLabels.favs]);
  }

}
