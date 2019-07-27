import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core'
import { WebSocketService } from '../../services/web-socket.service'
import { HttpClient,  } from '@angular/common/http'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  
@Input() public buttonText = '↩︎'
@Input() public focus = new EventEmitter()
@Output() public send = new EventEmitter()
@Output() public dismiss = new EventEmitter()
@ViewChild('message') message: ElementRef
constructor(public service:WebSocketService,public http :HttpClient) { }

ngOnInit() {  
  console.log(this.service.socket.id)
  sessionStorage.clear();
  this.focus.subscribe(() => this.focusMessage())
  this.service.getMessages()
  .subscribe((data) => {  
    let index=this.list.findIndex(x => x.id === data.fbId);
    if(index==-1){
    this.list.push({
      'name':data.firstName,
      'id':data.fbId,
      'pic':data.profilePic,
      'message':data.msg
    })     
  }
    sessionStorage.setItem('id',data.fbId)
    this.addMessage( "user",data.msg ,'USER',new Date().getTime())
    console.log(data)   
})
}

public focusMessage() {
  this.message.nativeElement.focus()
}

public getMessage() {
  return this.message.nativeElement.value
}

public clearMessage() {
  this.message.nativeElement.value = ''
}
end(){  
this.http.post("https://fff-facebook-backend.herokuapp.com/endchat",{"id":sessionStorage.getItem('id')}).subscribe(res=>{
  console.log(res)
})
sessionStorage.clear();
}
onSubmit() {  
  const message = this.getMessage()
  console.log(message)
  if (message.trim() === '') {
    return
  }
   this.service.sendMessage(message, sessionStorage.getItem('id'))
   this.addMessage( "agent",message, 'BOT',new Date().getTime())
  this.clearMessage()
  this.focusMessage()
}
  list=[]
  conversation=[{
    'from':'sada',
    'text':'asdsa',
    'type':'asd',
    'date':'asdas',
  }]
 
  public addMessage( from,text, type: 'USER' | 'BOT',date) {
    this.conversation.push({        
        'from':from,
        'text':text,
        'type':type,
        'date':date,
      })
    }
   
 

}
