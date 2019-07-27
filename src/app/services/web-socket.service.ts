import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  public socket:any;  
  readonly uri: string = "https://1fc1f3f8.ngrok.io";

  constructor() {
    this.socket = io(this.uri);
    console.log(this.socket.id)
   }

  // listen(eventName: string){
  //   return new Observable((Subscriber) => {
  //     this.socket.on(eventName, (data) => {
  //       Subscriber.next(data);
  //     })
  //   })
  // }

  // emit(eventName: string, data:any){
  //   this.socket.emit(eventName,data);
  // }   

 public  sendMessage(req, userid) {
    console.log(this.socket.id,"sent to "+userid)
    this.socket.emit('sendMsg', req, userid)
  }

  public requests = () => {
    return Observable.create((observer) => {
      this.socket.on('requests', (reqs) => {        
        console.log('requests',reqs)
        observer.next(reqs)
      })
    })
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('message', (data ) => {
        console.log('message',data)
        observer.next(data)
      })
    })
  }

}
