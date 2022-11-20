import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChooseFavUnfavComponent } from './dialog-choose-fav-unfav.component';

describe('DialogChooseFavUnfavComponent', () => {
  let component: DialogChooseFavUnfavComponent;
  let fixture: ComponentFixture<DialogChooseFavUnfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogChooseFavUnfavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChooseFavUnfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
