import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private webSocketService: WebSocketService){}

  ngOnInit(){
    // this.webSocketService.listen('broadcast').subscribe((data)=>{
    //   console.log("helllllo",data);
    // })
  }
}
