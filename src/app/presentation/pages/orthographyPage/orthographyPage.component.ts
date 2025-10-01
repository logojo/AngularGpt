import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GptMessageComponent } from "../../components/chat-bubbles/gptMessage/gptMessage.component";

@Component({
  selector: 'app-orthography-page',
  imports: [GptMessageComponent],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent { }
