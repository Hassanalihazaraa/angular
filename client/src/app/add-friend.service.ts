import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friends} from "./friends";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  public url = "";

  constructor(private http: HttpClient) {
    this.http = http;
  }

  addFriend(friend: Friends) {
    return this.http.post(this.url, friend)
  }
}
