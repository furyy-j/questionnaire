export enum Type {
    Single = 'Single',
    Multiple = 'Multiple',
    Text = 'Text'
}

export interface Question{
    title: string,
    id: string,
    date: string,
    type: Type
}
