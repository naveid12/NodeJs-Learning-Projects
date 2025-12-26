import { z, ZodError } from "zod";
// const ageSchema = z.number().min(16).max(50).int();
// const userAge = 15;
// const parseUserAge = ageSchema.parse(userAge);
// //console.log(parseUserAge);
// const { data , error, success} = ageSchema.safeParse(userAge);
// console.log(error);


// try {
//     const parseUserAge = ageSchema.parse(userAge);
//     console.log(parseUserAge);
// } catch (error) {
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);
//     } else{
//         console.log("Unexpected error" ,error);
//     }
// }

const portSchema = z.coerce.number().min(1).max(65535).default(3000);
export const PORT = portSchema.parse(process.env.PORT);