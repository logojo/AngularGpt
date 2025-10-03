import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Correction } from '@interfaces/orthography.interface';

@Component({
  selector: 'app-message-orthography',
  imports: [],
  templateUrl: './message-orthography.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageOrthographyComponent {
  @Input({ required: true }) accuracy_percentage!: number
  @Input({ required: true }) original_text!: string
  @Input() corrected_text?: string
  @Input() corrections: Correction[] = []

 }
