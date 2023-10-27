import {z} from 'zod';

export const createTaskSchema = z.object({
    title: z.string({requiredError: "Title is required"}),
    description: z.string({requiredError: "Description is required"}),
    status: z.enum(["active", "inactive"]).optional(),
    category: z.enum(["work", "hobby", "task"]).optional()
})
