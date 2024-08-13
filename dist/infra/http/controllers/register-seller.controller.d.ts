import { z } from 'zod';
import { RegisterSellerUseCase } from '@domain/marketplace/application/use-cases/register-seller.use-case';
import { EnvService } from '@infra/env/env.service';
declare const schema: z.ZodEffects<z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    avatarId: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | undefined, string | null | undefined>;
    password: z.ZodString;
    passwordConfirmation: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
    avatarId?: string | undefined;
}, {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
    avatarId?: string | null | undefined;
}>, {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
    avatarId?: string | undefined;
}, {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
    avatarId?: string | null | undefined;
}>;
export declare class RegisterSellerController {
    private registerSeller;
    private envService;
    constructor(registerSeller: RegisterSellerUseCase, envService: EnvService);
    handle(body: z.infer<typeof schema>): Promise<{
        seller: {
            id: string;
            name: string;
            phone: string;
            email: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        };
    }>;
}
export {};
