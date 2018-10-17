import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Recollection } from 'src/app/model/recollection';

@Component({
  selector: 'app-recollection-list-item',
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
