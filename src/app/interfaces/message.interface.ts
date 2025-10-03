import { Orthography } from "./orthography.interface";

export interface Message {
    text: string;
    isGpt: boolean;
    info?: Orthography
}