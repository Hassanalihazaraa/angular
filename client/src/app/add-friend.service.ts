import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friends} from "./friends";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  public readonly url: string = "http://localhost:9000/addFriend";

  constructor(private http: HttpClient) {
  }

  public addFriend(friend: Friends) {
    return this.http.post(this.url, friend)
  }

  public getFriends(url: string, options) {
    return this.http.get(url, options);
  }
}
