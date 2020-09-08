import {Component, OnInit} from '@angular/core';

import {Friends} from "../friends";
import {AddFriendService} from "../add-friend.service";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit {
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friends('', '', '', '', '');

  constructor(public addFriendService: AddFriendService) {
  }

  addFriend() {
    this.addFriendService.addFriend(this.friendModel).subscribe((data: Friends) => {
      // @ts-ignore
      console.log(data);
    })
  }

  ngOnInit(): void {
  }
}
