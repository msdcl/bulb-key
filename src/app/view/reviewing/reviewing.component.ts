import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpService } from '../../http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reviewing',
  templateUrl: './reviewing.component.html',
  styleUrls: ['./reviewing.component.css']
})
export class ReviewingComponent implements OnInit {

  public image;
  public name;
  public reason;
  public imageId;
  public star
  constructor(public route:ActivatedRoute,public router:Router,public http:HttpService,public toastr:ToastrService) { }

  ngOnInit() {
    this.imageId = this.route.snapshot.paramMap.get('id');
   this.image= this.http.getImageInfoFromSessionStorage(this.imageId)
  
    if(!(this.isEmpty(this.image.rating))){
      this.star = this.image.rating;
      this.name = this.image.reviewedBy;
      this.reason = this.image.reason
    }
   // console.log(this.image)
  }
  public submitReview=()=>{
    if(!this.name){
      this.toastr.warning("please enter your name");
    }else if(!this.reason){
      this.toastr.warning("Please give reason");
    }else if(!this.star){
      this.toastr.warning("Please give rating to image");
    }else{
      this.image['reviewedBy']=this.name;
      this.image['rating']=this.star;
      this.image['reason']=this.reason;
      this.image['isReviewed']=true;
    this.http.setImageInfoInSessionStorage(this.imageId,this.image);
    this.router.navigate(['/flickrImages'])
    }
    
  }
  public isEmpty = (data)=>{
    if(data==undefined || data==''||data==null){
      return true;
    }else{
      return false;
    }
  }

  public onItemChange = (rating)=>{
    this.star=rating;
  }
}
