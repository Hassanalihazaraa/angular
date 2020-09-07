import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(private http: HttpClient) {
    this.http = http;
  }
}
