import { Component, Input, OnInit } from '@angular/core';
import { Provider } from './../provider';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})



export class NewsDetailsComponent implements OnInit {

  constructor(private _NewsService:NewsService , private _ActivatedRoute:ActivatedRoute){}

  
arrayBusinessNews:any = localStorage.getItem('array');

 
index:any = this._ActivatedRoute.snapshot.params;
num:number = this.index.index;


language:any= localStorage.getItem('language');
category:any= localStorage.getItem('category');


ngOnInit(): void {


  this._NewsService.getBusinessNews(this.language , this.category).subscribe({
    // hotlinking image
    next: (data)=>{ this.arrayBusinessNews = data.articles.filter((ele:Provider)=>{return ele.urlToImage !== null   && ele.urlToImage !== "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/griff-s-hamburgers-64a62229ced14.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*" && ( ele.urlToImage.includes(`.jpg`)  || ele.urlToImage.includes(`.png`) )  }); 
     console.log(this.arrayBusinessNews);
     console.log(this.language);
     console.log(this.category);

     
     
       }
       
    
    
  })

 
  

}

 
 


 



}
