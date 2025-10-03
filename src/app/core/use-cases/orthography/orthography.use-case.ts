import { environment } from "@environments/environment.development";
import { Orthography } from "@interfaces/orthography.interface";

export const orthographyUseCase = async ( prompt : string ) => {
    try {        
        const res = await fetch(`${ environment.apiUrl }/orthography-check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt })
        });

        if( !res.ok ) throw new Error('No se pudo realizar la corrección')

        const data  = await res.json() as Orthography;

        return {
            status: true,
            ...data
        };

    } catch (error) {
        
        console.log( error );
        
        return {
            status: false,
            original_text: prompt,
            accuracy_percentage: 0,
            corrections: [],
            message: 'No se pudo realizar la corrección',
        }
        
    }
}