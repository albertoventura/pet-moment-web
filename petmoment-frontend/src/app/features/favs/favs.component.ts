import { LocalstorageService } from './../../core/services/localstorage.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Data } from 'src/app/core/models/data.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogChooseFavUnfavComponent } from 'src/app/shared/components/dialog-choose-fav-unfav/dialog-choose-fav-unfav.component';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss']
})
export class FavsComponent implements OnInit {

  favList: any[] = [];

  constructor(
    private localstorageService: LocalstorageService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.favList = this.localstorageService.getAllWithoutId()
  }
  saveOnLocalstorage(data: Data){
    this.localstorageService.set(data?.id!, data);
    this.showSnackBar('Your image was saved!', 'Ok!');
  }
  deleteDataFromLocalstorage(data: Data, i: number){
    this.favList[i].isSaved = !data.isSaved
    this.localstorageService.delete(data?.id!);
    this.showSnackBar('Your image was unsaved!', 'Ok!');
  }
  deleteEmptyDataFromLocalstorage(data: Data, i: number){
    this.favList[i].isSaved = !data.isSaved
    this.localstorageService.delete(data?.id!);
    this.showSnackBar('Your image was unsaved!', 'Ok!');
  }
  saveOrDeleteDataOnLocalstorage(data: Data, i: number){
    if(data.isSaved){
      this.openDialog(data,i);
    }else{
      this.favList[i].isSaved = !data.isSaved
      this.saveOnLocalstorage(data);
    }
  }
  deleteThisImageFromFav(data: Data, i: number){
    console.log(data,i);
    this.deleteDataFromLocalstorage(data, i);

  }
  showSnackBar(msg: string, action: string, duration:number = 3000){
    this._snackBar.open(msg, action, {
      duration: duration,
    });
  }
  openDialog(data: Data, i: number) {
    const dialogRef = this.dialog.open(DialogChooseFavUnfavComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.deleteDataFromLocalstorage(data, i);
      }
    });
  }
}
