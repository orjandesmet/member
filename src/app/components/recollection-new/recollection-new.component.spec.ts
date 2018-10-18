import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecollectionNewComponent } from './recollection-new.component';

describe('RecollectionNewComponent', () => {
  let component: RecollectionNewComponent;
  let fixture: ComponentFixture<RecollectionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecollectionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecollectionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
