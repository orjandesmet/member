import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Recollection } from '../../model/recollection';

@Component({
  selector: 'mem-recollection-list-item',
  templateUrl: './recollection-list-item.component.html',
  styleUrls: ['./recollection-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecollectionListItemComponent implements OnInit {

  @Input() recollection: Recollection;

  constructor() { }

  ngOnInit() {
  }

}
