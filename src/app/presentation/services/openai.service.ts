import { Injectable } from '@angular/core';
import { orthographyUseCase } from 'app/core/use-cases';
import { from } from 'rxjs';


@Injectable({providedIn: 'root'})
export class OpenAiService {

    checkOrthography( prompt :string ) {
        //*from convierte la peticion a un observable
        //*se llama el  use-case
        return from( orthographyUseCase( prompt ) );
    }
}