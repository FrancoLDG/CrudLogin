import {z} from 'zod';

export const registerSchema = z.object({
username: z.string({requiredError: 'Username is required'}),
email: z.string({requiredError: "Email is required"}).email({message: "invalid email"}),
password: z.string({requiredError: "Password is required"}).min(6, {message: "Password must be at least 6 characters long"})
});

export const loginSchema = z.object({
    email: z.string({requiredError: "Email is required"}).email({message: "invalid email"}),
    password: z.string({requiredError: "Password is required"}).min(6, {message: "Password must be at least 6 characters long"})
});