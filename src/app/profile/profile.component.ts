import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile$ = this.profileService.profile$;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.loadProfile();
  }

}
