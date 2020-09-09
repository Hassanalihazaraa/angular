import {Component, OnInit} from '@angular/core';

import {Friends} from "../friends";
import {AddFriendService} from "../add-friend.service";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})

export class FriendFormComponent implements OnInit {
  public readonly url: string = "http://localhost:9000/allFriends";
  languages: Array<any> = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friends('', '', '', '', '');

  constructor(private addFriendService: AddFriendService) {
  }

  public addFriend() {
    this.addFriendService.addFriend(this.friendModel).subscribe();
  }

  ngOnInit(): any {
  }
}
