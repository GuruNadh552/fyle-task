import { AllpurposeService } from 'src/app/shared/allpurpose.service';
import { Component, OnInit } from '@angular/core';
import { request } from '@octokit/request';
import * as parse from 'parse-link-header';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  reposData : any = []
  repos_length:number = 0;
  loader:boolean = true;

  username:any = "GuruNadh552";

  constructor(private allpurpose:AllpurposeService) { }

  ngOnInit(): void {
    this.getUserRepos(this.username,1).then((val)=>{
      this.loader = false;
      this.reposData = val;
    })
    this.allpurpose.pageChange$.subscribe((res:any)=>{
      this.reposData = [];
      this.loader = true;
      this.getUserRepos(this.username,res).then((val)=>{
        this.loader = false;
        this.reposData = val;
      })
    })
  }

  async getUserRepos(username:any, page:number) {
    console.log("called");
    const repos = [];

      // Call the GitHub API and get all repositories
      const result = await request(`GET /user/repos`, {
        headers: {
          authorization: `token ${environment.gitToken}`,
        },
        visibility: 'all',
        sort: 'created',
        direction: 'desc',
        per_page: 10,
        page: page
      });
    repos.push(...result.data);
    console.log(repos);

    this.repos_length = this.allpurpose.repos_count/10;
    this.repos_length = this.allpurpose.repos_count%10 ? this.repos_length+1 : this.repos_length;
    return repos;
    }

}
