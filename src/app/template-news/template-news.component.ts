import { Component, EventEmitter, Input , Output , OnInit} from '@angular/core';
import { Provider } from './../provider';


@Component({
  selector: 'app-template-news',
  templateUrl: './template-news.component.html',
  styleUrls: ['./template-news.component.css']
})

export class TemplateNewsComponent {

  @Input() item:any = {};
  @Input() index:number= 0;

  arrayBusinessNews:any = JSON.parse(localStorage.getItem('array')!);
 
//  static c:number = 0;
//   i:number = TemplateNewsComponent.c++;



}
