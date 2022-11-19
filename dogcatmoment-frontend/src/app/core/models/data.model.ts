export interface IData {
  id: string;
  url: string;
  width: number;
  height: number
}

export class Data {
  private _id?: string;
  private _img?: string;
  private _width?: number;
  private _height?: number;
  private _breedName?: string;
  private _breedDescription?: string;
  private _breedTemperament?: string;

  get id(){
    return this._id || '';
  }
  set id(id: string){
    this._id = id ? id : '';
  }

  get img(){
    return this._img || '';
  }
  set img(img: string){
    this._img = img ? img : '';
  }

  get width(){
    return this._width || 0;
  }
  set width(width: number){
    this._width = width ? width : 0;
  }

  get height(){
    return this._height || 0;
  }
  set height(height: number){
    this._height = height ? height : 0;
  }

  get breedName(){
    return this._breedName || '';
  }
  set breedName(breedName: string){
    this._breedName = breedName ? breedName : '';
  }

  get breedDescription(){
    return this._breedDescription || '';
  }
  set breedDescription(breedDescription: string){
    this._breedDescription = breedDescription ? breedDescription : '';
  }

  get breedTemperament(){
    return this._breedTemperament || '';
  }
  set breedTemperament(breedTemperament: string){
    this._breedTemperament = breedTemperament ? breedTemperament : '';
  }
}
