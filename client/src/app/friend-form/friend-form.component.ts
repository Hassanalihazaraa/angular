import {Component, OnInit} from '@angular/core';

import {Friends} from "../friends";
import {AddFriendService} from "../add-friend.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.scss']
})
export class FriendFormComponent implements OnInit {
  readonly url = "http://localhost:9001/allFriends";
  public allFriends: any = [];
  languages = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friends('', '', '', '', '');

  constructor(public addFriendService: AddFriendService) {
  }

  public addFriend() {
    this.addFriendService.addFriend(this.friendModel).subscribe((res: Friends) =>
      //this.allFriends = res
      this.getFriends(this.url)
    );
  }

  public async getFriends(url: string): Promise<any> {
    const options = {
      method: 'get',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.addFriendService.getFriends(url, options)
      .subscribe(res => {
        this.allFriends = res
      });
  }

  ngOnInit(): any {
    console.log(this.getFriends(this.url));
  }
}
