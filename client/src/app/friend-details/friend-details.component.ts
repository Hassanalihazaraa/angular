import {Component, OnInit} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

import {AddFriendService} from "../add-friend.service";

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.scss']
})
export class FriendDetailsComponent implements OnInit {
  public readonly url: string = "http://localhost:9000/allFriends";
  public allFriends: any = [];

  constructor(private addFriendService: AddFriendService) {
  }

  public async Friends(url: string): Promise<any> {
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

  ngOnInit(): void {
    this.Friends(this.url).then(res => this.allFriends = res);
  }
}
