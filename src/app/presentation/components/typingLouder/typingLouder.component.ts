import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-typing-louder',
  imports: [],
  styleUrl:'./typingLouder.component.css',
  template: `
  <div class="typing">
    <span class="circle bouncing"></span>
    <span class="circle bouncing"></span>
    <span class="circle bouncing"></span>
  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypingLouderComponent { }
