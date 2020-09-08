import {Component, OnInit} from '@angular/core';

import {Friends} from "../friends";
import {AddFriendService} from "../add-friend.service";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit {
  readonly url = "http://localhost:9001/allFriends";
  public allFriends = this.addFriendService.getFriends(this.url);
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friends('', '', '', '', '');

  constructor(public addFriendService: AddFriendService) {
  }

  addFriend() {
    this.addFriendService.addFriend(this.friendModel).subscribe((data: Friends) => console.log(data, this.allFriends));
  }

  ngOnInit(): any {
    console.log(this.allFriends);
  }
}
