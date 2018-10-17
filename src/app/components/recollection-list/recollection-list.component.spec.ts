import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecollectionListComponent } from './recollection-list.component';

describe('RecollectionListComponent', () => {
  let component: RecollectionListComponent;
  let fixture: ComponentFixture<RecollectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecollectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecollectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
