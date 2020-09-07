import {Component, OnInit} from '@angular/core';

import {Friends} from "../friends";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit {
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friends('', '', '', '', '');
  submitted = false;

  onSubmit() {
    this.submitted = true
  }

  ngOnInit(): void {
  }
}
