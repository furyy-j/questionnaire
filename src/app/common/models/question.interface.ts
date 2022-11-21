import {Type} from "../enums/types.enum";

export interface Question{
    title: string,
    id: string,
    creationDate: string,
    type: Type,
    answeredDate?: Date,
    answers?: string[],
    answer?: string[],
}
