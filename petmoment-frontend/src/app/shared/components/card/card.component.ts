import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from 'src/app/core/models/data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data!: Data;
  @Input() isLoading!: boolean;
  @Input() hasImg!: Boolean;
  @Input() dataSaved!: Boolean;
  @Input() hasGetImgButton!: Boolean;
  @Input() hasDeleteButton!: Boolean;
  @Output() saveOrDeleteDataOnLocalstorage = new EventEmitter;
  @Output() getNewImage = new EventEmitter;
  @Output() deleteThisImageFromFav = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  emitSaveDataOnLocalstore() {
    this.saveOrDeleteDataOnLocalstorage.emit();
  }

  emitGetNewImage() {
    this.getNewImage.emit();
  }

  emitDeleteThisImageFromFav() {
    this.deleteThisImageFromFav.emit();
  }
}
