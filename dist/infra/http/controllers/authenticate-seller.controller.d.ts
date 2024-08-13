import { Response } from 'express';
import { z } from 'zod';
import { AuthenticateSellerUseCase } from '@domain/marketplace/application/use-cases/authenticate-seller.use-case';
declare const schema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare class AuthenticateSellerController {
    private authenticateSeller;
    constructor(authenticateSeller: AuthenticateSellerUseCase);
    handle(body: z.infer<typeof schema>, response: Response): Promise<Response<any, Record<string, any>>>;
}
export {};
