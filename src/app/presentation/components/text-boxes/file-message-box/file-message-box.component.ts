import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface TextMessageEvent {
  file: File,
  prompt?: string | null
}

@Component({
  selector: 'app-file-message-box',
  imports: [ ReactiveFormsModule ],
  templateUrl: './file-message-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileMessageBoxComponent { 
  @Input()
  placeholder :string = '';
 
  @Output()
  onMessage = new EventEmitter<TextMessageEvent>();

  public fb = inject( FormBuilder );

  form = this.fb.group({
    prompt: [],
    file: [null, Validators.required]
  });

  file : File | undefined;

  handleSubmit(){
    if( this.form.invalid ) return;
    
    const { prompt, file  } = this.form.value;
    
    this.onMessage.emit({ prompt, file: file! });
    this.form.reset()
  }

  handleSelectedFile( event : any ) {
    const file = event.target.files.item(0);
    this.form.controls.file.setValue(file);
  }
}
