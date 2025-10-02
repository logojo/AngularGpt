import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MyMessageComponent, GptMessageComponent, TypingLouderComponent, TextMessageBoxComponent, FileMessageBoxComponent, TextMessageEvent, SelectMessageBoxComponent, TextMessageBoxEvent } from '@components/index';
import { Message } from '@interfaces/index';
import { OpenAiService } from '../../../services/openai.service';



@Component({
  selector: 'app-orthography-page',
  imports: [
    GptMessageComponent, 
    MyMessageComponent, 
    TypingLouderComponent, 
    TextMessageBoxComponent, 
    FileMessageBoxComponent, 
    SelectMessageBoxComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {
  
  public openAiService = inject( OpenAiService );

  public messages = signal<Message[]>([{text: 'Hola mundo', isGpt: true}]);
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
