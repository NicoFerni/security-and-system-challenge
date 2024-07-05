export interface InputType {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    label: string;
    errorMessage?: string;
    required: boolean;
}

export const inputs: InputType[] = [
    {
        id: 1,
        name: 'name',
        type: 'text',
        placeholder: 'Ingrese su nombre',
        label: 'Nombre ',
        required: true
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'Ingrese su email',
        label: 'Email ',
        required: true
    },
    {
        id: 3,
        name: 'message',
        type: 'text',
        placeholder: 'Deje su mensaje',
        label: 'Mensaje ',
        required: true
    }
]
