import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UsersComponent } from './components/users/users.component';
import { WebSocketService } from './services/web-socket.service';

import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
