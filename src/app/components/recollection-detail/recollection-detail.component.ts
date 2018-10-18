import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';
import { RecollectionService } from '../../services/recollection.service';

@Component({
  selector: 'mem-recollection-detail',
  templateUrl: './recollection-detail.component.html',
  styleUrls: ['./recollection-detail.component.scss']
})
export class RecollectionDetailComponent implements OnInit {

  recollection$ = this.activatedRoute.params.pipe(
    pluck<Params, string>('recollectionId'),
    switchMap(recollectionId => this.recollectionService.recollectionById(recollectionId)),
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private recollectionService: RecollectionService
    ) { }

  ngOnInit() {
  }

}
