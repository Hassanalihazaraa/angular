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
  public readonly url: string = "http://localhost:9000/allFriends";
  public allFriends: any = [];
  languages: Array<any> = ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'Python'];
  friendModel = new Friends('', '', '', '', '');

  constructor(public addFriendService: AddFriendService) {
  }

  public addFriend() {
    this.addFriendService.addFriend(this.friendModel).subscribe(() =>
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
    this.getFriends(this.url).then(res => this.allFriends = res);
  }
}
