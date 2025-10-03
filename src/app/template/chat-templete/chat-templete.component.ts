import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FileMessageBoxComponent, GptMessageComponent, MyMessageComponent, SelectMessageBoxComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageEvent, TypingLouderComponent } from "@components/index";
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';

@Component({
  selector: 'app-chat-templete',
  imports: [
    ReactiveFormsModule,
    GptMessageComponent, 
    MyMessageComponent, 
    TypingLouderComponent,  
    FileMessageBoxComponent, 
    SelectMessageBoxComponent,
    TextMessageBoxComponent
    
  ],
  templateUrl: './chat-templete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatTempleteComponent { 
  public openAiService = inject( OpenAiService );

  public messages = signal<Message[]>([]);
  public isLoading = signal(false);

  handleMessage( prompt : string ) {
    console.log( prompt );
  }

  handleMessageWithFile({ prompt, file } : TextMessageEvent ) {
    console.log({ prompt, file }); 
  }

  handleMessageWithSelect({ prompt, option } : TextMessageBoxEvent) {
    console.log({ prompt, option }); 
  }
}
