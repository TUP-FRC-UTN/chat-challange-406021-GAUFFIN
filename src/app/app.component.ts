import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonEngine } from '@angular/ssr';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ChatComponentComponent,
    MessagesComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tercer-clase';
  estaActuivo = true;
  items: string[] = ['a', 'b', 'c'];
}
export class Message {
  text: string | undefined;
  issuer: string | undefined;
}
