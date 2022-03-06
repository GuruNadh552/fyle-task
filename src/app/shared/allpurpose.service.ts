import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllpurposeService {


  USER_API : string = 'https://api.github.com/users/gurunadh552';

  REPOS_API : string = 'https://api.github.com/users/GuruNadh552/repos';


  repos_count : number = 0;
  active_page : number = 1;

  pageChange$ = new Subject<number>();


  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get(this.USER_API);
  }

  getUserRepos(){
    return this.http.get(this.REPOS_API);
  }

}
