import app from './app';
app.listen(3000)

// import { z } from 'zod';


// const userSchema = z.object({
//     name: z.string()
//         .min(3, {message : 'Name is too short'})
//         .transform(name => name.toLocaleUpperCase()),
//     age: z.number().min(18, 'You must be 18 or older'),
// });

// type User = z.infer<typeof userSchema>;

// function saveUser(user : User) {

//     const {name, age} = userSchema.parse(user);
//     console.log(name, age);
// }



// saveUser({name: 'John', age: 1132})