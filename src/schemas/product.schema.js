import z from 'zod'
export const createProductSchema= z.object({
    title:z.string({
        required_error:'Titulo es Requerido '
    }),
    description:z.string({
        required_error: "Descripcion debe ser Texto"
    }),
    category:z.string({
        required_error: "Categoria debe ser Texto"
    }),
    url:z.string({
        required_error: "url must be string"
    }),
    price:z.string({
        required_error: "Precio debe ser un Numero"
    }),
    date: z.string().datetime().optional()

})