import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friends} from "./friends";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  url = "http://localhost:9001/addFriend";

  constructor(private http: HttpClient) {}

  addFriend(friend: Friends) {
    return this.http.post(this.url, friend)
  }
}
