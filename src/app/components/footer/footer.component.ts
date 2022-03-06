import { AllpurposeService } from 'src/app/shared/allpurpose.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('reposLength') reposLength! : any  ;

  activePage !: number;


  constructor(private allpurpose:AllpurposeService) { }

  ngOnInit(): void {
    this.activePage = this.allpurpose.active_page
  }


  createRange(num:any){
    var pagesArr = [];
    for(let i=1;i<=num;i++)
      pagesArr.push(i);
    return pagesArr;
  }

  changePage(i:number){
    this.activePage = i;
    if(this.activePage<=0){
      console.log(this.activePage);

      this.activePage = 1;
      return
    }
    if(this.activePage>this.reposLength){
      this.activePage = parseInt(this.reposLength);
      console.log(this.activePage);

      return
    }
    this.allpurpose.pageChange$.next(i);
  }

}
