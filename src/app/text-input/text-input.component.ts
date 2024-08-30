import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../app.component';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css',
})
export class TextInputComponent {
  textAreaValue: string = '';
  @Input() issuer: string | undefined;

  @Output() enviarMensaje = new EventEmitter<Message>();
  emitirEvento(text:string) {
    const message: Message = {
      text,
      issuer: this.issuer,
    };
    this.enviarMensaje.emit(message);
  }
}
