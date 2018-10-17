import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { RecollectionService } from './services/recollection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'member';

  recollections$ = this.recollectionService.recollections$;

  constructor(
    private swUpdate: SwUpdate,
    private recollectionService: RecollectionService,
  ) {
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load new version?")) {
          window.location.reload();
        }
      });
    }

    this.loadRecollections();
  }

  private loadRecollections() {
    this.recollectionService.loadRecollections();
  }
}
