import { Component, OnInit } from '@angular/core';
import { RecollectionService } from '../../services/recollection.service';

@Component({
  selector: 'mem-recollection-list',
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
