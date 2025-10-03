import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MyMessageComponent, GptMessageComponent, TypingLouderComponent, TextMessageBoxComponent, FileMessageBoxComponent, TextMessageEvent, SelectMessageBoxComponent, TextMessageBoxEvent, MessageOrthographyComponent } from '@components/index';
import { Message } from '@interfaces/index';
import { OpenAiService } from '../../services/openai.service';



@Component({
  selector: 'app-orthography-page',
  imports: [
    GptMessageComponent,
    MyMessageComponent,
    TypingLouderComponent,
    TextMessageBoxComponent,
    MessageOrthographyComponent
],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {
  
  public openAiService = inject( OpenAiService );

  public messages = signal<Message[]>([]);
  public isLoading = signal(false);

  handleMessage( prompt : string ) {

    this.isLoading.set(true);

    this.messages.update((messages) => [
      ...messages,
      {
        isGpt: false,
        text: prompt
      }
    ]);

    this.openAiService.checkOrthography( prompt )
    .subscribe( res => {
      this.messages.update( (messages) => [
        ...messages,
        {
          isGpt: true,
          text: res.message,
          info: res
        }
      ]);

      this.isLoading.set(false);
    });
  }

 }
