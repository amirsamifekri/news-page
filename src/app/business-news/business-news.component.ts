import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Provider } from '../provider';



@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent {

  constructor(private _NewsService:NewsService){}

darkMode:boolean = false;

modeToggle(){
  this.darkMode = !this.darkMode;
  document.documentElement.setAttribute('data-theme' , this.darkMode ? 'dark' : 'light')
}

 

  arrayBusinessNews:Provider[] = [];
  language:string='en';
  category:string='business';  





  title = 'pagination';
  // posts:any ;
  page:number = 1;
  count:number = 0;
  pageSize:number = 8;
  // tableSizes:any = [3,6,9,12];

  searchText:string = "";




  onTableDataChange(event:any){
    this.page = event;
    this.changeLanguage ();
  }


  

  // onTableSizeChange(event:any):void{
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.changeLanguage ();
  // }
  

  


 

  ngOnInit(): void {
    this._NewsService.getBusinessNews(this.language , this.category).subscribe({
      // hotlinking image
      next: (data)=>{ this.arrayBusinessNews = data.articles.filter((ele:Provider)=>{return ele.urlToImage !== null   && ( ele.urlToImage.includes(`.jpg`)  || ele.urlToImage.includes(`.png`) )  }); 
       console.log(this.arrayBusinessNews);
 
       localStorage.setItem('language' , this.language);
       localStorage.setItem('category' , this.category);
       localStorage.setItem('array' , JSON.stringify(this.arrayBusinessNews));
       
         }
         
      
      
    })

   
    

  }


  
  changeLanguage (){
    this.language = (<HTMLSelectElement>document.getElementById('Languages')).value;
    this.category = (<HTMLSelectElement>document.getElementById('Categories')).value
    console.log(this.language , this.category);
    
    this._NewsService.getBusinessNews(this.language , this.category).subscribe({
      // hotlinking image
      next: (data)=>{ this.arrayBusinessNews = data.articles.filter((ele:Provider)=>{return ele.urlToImage !== null  && ( ele.urlToImage.includes(`.jpg`)  || ele.urlToImage.includes(`.png`) ) }); 
      // this._NewsService.mainArray = this.arrayBusinessNews;
      localStorage.setItem('language' , this.language);
      localStorage.setItem('category' , this.category);
      localStorage.setItem('array' , JSON.stringify(this.arrayBusinessNews));
         }    
    })

    

  }






}
