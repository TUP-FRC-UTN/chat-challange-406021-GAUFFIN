import { Component, Input } from '@angular/core';
import { ChatComponentComponent } from '../chat-component/chat-component.component';
import { Message } from '../app.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [ChatComponentComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  @Input() messages: Message[] | undefined;
}
