import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecollectionDetailComponent } from './recollection-detail.component';

describe('RecollectionDetailComponent', () => {
  let component: RecollectionDetailComponent;
  let fixture: ComponentFixture<RecollectionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecollectionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecollectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
