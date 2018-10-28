import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
public allImages = [];
  constructor(public http:HttpService,public router:Router) { }

  ngOnInit() {
    this.getFlickrImages();
  }
 public getFlickrImages = ()=>{
   this.http.getImages().subscribe((response)=>{
     let data = response.photos.photo;
     
     for(let image of data){

      let reviewData = this.http.getImageInfoFromSessionStorage(image.id);
    //  console.log(reviewData)
      let obj={}
      if(this.isEmpty(reviewData)){
         obj = {
          server:image.server,
          id:image.id,
          farm:image.farm,
          secret:image.secret,
          title:image.title,
          isReviewed:false
        }
      }else if(!(this.isEmpty(reviewData)) && !(reviewData.isReviewed)){
        obj = {
          server:image.server,
          id:image.id,
          farm:image.farm,
          secret:image.secret,
          title:image.title,
          isReviewed:false
        }
      }
      else if(!(this.isEmpty(reviewData)) && reviewData.isReviewed){
        obj = {
          server:image.server,
          id:image.id,
          farm:image.farm,
          secret:image.secret,
          title:image.title,
          rating:reviewData.rating,
          reviewedBy:reviewData.reviewedBy,
          reason:reviewData.reason,
          isReviewed:true
        }
      }
       this.http.setImageInfoInSessionStorage(image.id,obj);
       this.allImages.push(obj);
     }
   })
 }

 public viewDetails = (details)=>{
 
  this.router.navigate(['/imageDetails',details.id])
 }

 public isEmpty = (data)=>{
  if(data==undefined || data==''||data==null){
    return true;
  }else{
    return false;
  }
}
}
