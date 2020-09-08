import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friends} from "./friends";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  readonly url = "http://localhost:9001/addFriend";

  constructor(private http: HttpClient) {
  }

  public addFriend(friend: Friends) {
    return this.http.post(this.url, friend)
  }

  public getFriends(url: string, options) {
    return this.http.get(url, options);
  }
}
