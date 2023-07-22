import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { NotFoundComponent } from './not-found/not-found.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';



const routes: Routes = [
  // {path:"" , redirectTo:"business" , pathMatch:'prefix'} , 
  {path:"" ,  component:BusinessNewsComponent  } , 
  {path:"home" ,  component:BusinessNewsComponent  } , 
  {path:"newsdetails/:index" ,   component:NewsDetailsComponent  } , 



  {path:"**" ,  component:BusinessNewsComponent   } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
