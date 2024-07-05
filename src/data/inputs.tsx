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
        errorMessage: 'El nombre no puede estar vacio y no debe contener caracteres especiales',
        required: true
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        placeholder: 'Ingrese su email',
        label: 'Email ',
        errorMessage: 'Debes ingresar una direccion de correo valida',
        required: true
    },
    {
        id: 3,
        name: 'message',
        type: 'text',
        placeholder: 'Deje su mensaje',
        label: 'Mensaje ',
        errorMessage: 'Este campo no puede estar vacio',
        required: true
    }
]
