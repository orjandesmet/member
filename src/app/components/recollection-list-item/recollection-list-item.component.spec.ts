import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecollectionListItemComponent } from './recollection-list-item.component';

describe('RecollectionListItemComponent', () => {
  let component: RecollectionListItemComponent;
  let fixture: ComponentFixture<RecollectionListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecollectionListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecollectionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
