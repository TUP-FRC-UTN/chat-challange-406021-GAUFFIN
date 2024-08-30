import { Component, Input } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { Message } from '../app.component';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-chat-component',
  standalone: true,
  imports: [MessagesComponent, TextInputComponent],
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.css',
})
export class ChatComponentComponent {
  chat: Message[] = [
    { text: 'Hola, ¿cómo estás?', issuer: 'pepe' },
    { text: 'Estoy bien, gracias. ¿Y tú?', issuer: 'pepito' },
  ];

  recibirMensaje(mensaje: Message) {
    this.chat.push(mensaje);
  }
}
