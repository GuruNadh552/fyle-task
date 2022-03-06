import { Component, OnInit } from '@angular/core';
import { AllpurposeService } from 'src/app/shared/allpurpose.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData : any = {}

  constructor(private allpurpose:AllpurposeService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.allpurpose.getUserData().subscribe((res:any)=>{
      this.userData = res;
      console.log(this.userData);
      this.allpurpose.repos_count = res.public_repos;
    })
  }

}
