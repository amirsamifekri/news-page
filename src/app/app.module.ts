import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TemplateNewsComponent } from './template-news/template-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,

    
    NotFoundComponent,
    NavbarComponent,
    FooterComponent,
    TemplateNewsComponent,

    BusinessNewsComponent,

    NewsDetailsComponent,
     SearchPipe,
  ]
    ,
  imports: [
  BrowserModule,
    AppRoutingModule ,
    HttpClientModule , 
    ReactiveFormsModule , 
    NgxPaginationModule ,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
