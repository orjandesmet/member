import { Component, OnInit } from '@angular/core';
import { FSProfileService } from '../data/firestore/fsprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile$ = this.fsProfileService.profile$;

  constructor(private fsProfileService: FSProfileService) { }

  ngOnInit() {
  }

}
