import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Friends} from "./friends";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  readonly url = "http://localhost:9001/addFriend";

  constructor(private http: HttpClient) {
  }

  addFriend(friend: Friends) {
    return this.http.post(this.url, friend)
  }

  public async getFriends(url: string): Promise<any> {
    const options = {
      method: 'get',
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.get(url, options);
  }
}
