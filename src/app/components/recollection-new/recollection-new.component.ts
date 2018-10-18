import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createRecollection } from '../../model/recollection';
import { RecollectionService } from '../../services/recollection.service';

@Component({
  selector: 'mem-recollection-new',
  templateUrl: './recollection-new.component.html',
  styleUrls: ['./recollection-new.component.scss']
})
export class RecollectionNewComponent implements OnInit {

  constructor(
    private recollectionService: RecollectionService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  addRecollection() {
    this.recollectionService.addRecollection(createRecollection());
    this.router.navigateByUrl('/');
  }

}
