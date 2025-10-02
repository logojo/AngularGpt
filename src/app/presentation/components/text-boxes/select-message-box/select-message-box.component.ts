import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Option {
  id: string;
  text: string;
}

export interface TextMessageBoxEvent {
  prompt: string;
  option: string;
}

@Component({
  selector: 'app-select-message-box',
  imports: [ ReactiveFormsModule ],
  templateUrl: './select-message-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectMessageBoxComponent {
  @Input({ required: true })
  options!: Option[];
  
  @Output()
  onMessage = new EventEmitter<TextMessageBoxEvent>();

  public fb = inject( FormBuilder );

  form = this.fb.group({
    prompt: ['', Validators.required ],
    option: ['', Validators.required ]
  });

  // handleSelected( option : string ) {
  
  //   this.form.controls.option.setValue(option);
  // }

  handleSubmit(){
    if( this.form.invalid ) return;
    
    const { prompt, option } = this.form.value; 
    
    this.onMessage.emit({ prompt: prompt!, option: option! });
    this.form.reset()
  }
 }
