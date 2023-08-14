import z from 'zod'
export const createProductSchema= z.object({
    title:z.string({
        required_error:'title es require'
    }),
    description:z.string({
        required_error: "description must be string"
    }),
    category:z.string({
        required_error: "category must be string"
    }),
    url:z.string({
        required_error: "url must be string"
    }),
    price:z.string({
        required_error: "price must be ggggg number"
    }),
    date: z.string().datetime().optional()

})