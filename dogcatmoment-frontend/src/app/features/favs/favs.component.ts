import { LocalstorageService } from './../../core/services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {

  favList: any[] = [];

  constructor(
    private dataService: DataService,
    private localstorageService: LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.favList = this.localstorageService.getAllWithoutId()
    console.log('all favs', this.favList);

  }

}
