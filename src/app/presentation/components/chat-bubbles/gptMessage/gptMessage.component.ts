import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-gpt-message',
  imports: [],
  templateUrl: './gptMessage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GptMessageComponent { 

@Input({ required: true })  text!: string;
}
