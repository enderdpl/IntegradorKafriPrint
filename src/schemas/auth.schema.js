import {z} from 'zod';

export const registerSchema= z.object({
    username: z.string({
        required_error: ' username is require'
    }),
    email:z.string({
        required_error:' email is require'
    }).email({
        message: 'invalid email'
    }),
    password: z.string({
        required_error:'password is require'
    }).min(6,{
        message: ' Password must be at least 6 characters long'
    })
})

export const loginSchema=z.object({
    email: z.string({
        required_error: 'Correo es Requerido',
    }).email({
        message: ' Correo no es Valido'
    }),
    password: z.string({
        required_error:'Contraseña es Requerida',

    }).min(6,{
        message:'Contraseña debe tener mas de 6 caracteres'
    })
})