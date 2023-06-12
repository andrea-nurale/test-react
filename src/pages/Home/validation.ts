import {z} from "zod";

 const schema = z.object({
    email: z.string().min(5, { message: "troppo corto" }),
    firstName: z.string().min(5, { message: "troppo corto" }),
    lastName: z.string().min(5, { message: "troppo corto" }),
});

 export default schema