import {Component, OnInit} from '@angular/core';

import {Friends} from "../friends";
import {AddFriendService} from "../add-friend.service";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit {
  public allFriends: string;
  public url = "http://localhost:9001/allFriends";
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

  public async function(url: string): Promise<any> {
    const response = await fetch(url, {
      method: 'get',
      headers: new Headers({
        'Content-type': 'application/json'
      })
    });
    const data = await response.json();
    this.allFriends = data;
    return data;
  }

  ngOnInit(): void {
  }
}
