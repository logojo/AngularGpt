export interface Orthography {
    original_text:       string;
    corrected_text?:      string;
    corrections:         Correction[];
    accuracy_percentage: number;
    message:             string;
}

export interface Correction {
    error:      string;
    suggestion: string;
    reason:     string;
}
