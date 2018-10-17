import { Component, OnInit } from '@angular/core';
import { RecollectionService } from 'src/app/services/recollection.service';

@Component({
  selector: 'app-recollection-list',
  templateUrl: './recollection-list.component.html',
  styleUrls: ['./recollection-list.component.scss']
})
export class RecollectionListComponent implements OnInit {

  recollections$ = this.recollectionService.recollections$;

  constructor(private recollectionService: RecollectionService) { }

  ngOnInit() {
    this.loadRecollections();
  }

  private loadRecollections() {
    this.recollectionService.loadRecollections();
  }

}
