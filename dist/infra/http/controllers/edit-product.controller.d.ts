import { z } from 'zod';
import { EditProductUseCase } from '@domain/marketplace/application/use-cases/edit-product.use-case';
import { EnvService } from '@infra/env/env.service';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const bodySchema: z.ZodObject<{
    title: z.ZodString;
    categoryId: z.ZodString;
    description: z.ZodString;
    priceInCents: z.ZodNumber;
    attachmentsIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    priceInCents: number;
    categoryId: string;
    attachmentsIds: string[];
}, {
    title: string;
    description: string;
    priceInCents: number;
    categoryId: string;
    attachmentsIds: string[];
}>;
export declare class EditProductController {
    private editProduct;
    private envService;
    constructor(editProduct: EditProductUseCase, envService: EnvService);
    handle(id: string, body: z.infer<typeof bodySchema>, user: UserPayload): Promise<{
        product: {
            id: string;
            title: string;
            description: string;
            priceInCents: number;
            status: string;
            owner: {
                id: string;
                name: string;
                phone: string;
                email: string;
                avatar: {
                    id: string;
                    url: string;
                } | null;
            };
            category: {
                id: string;
                title: string;
                slug: string;
            };
            attachments: {
                id: string;
                url: string;
            }[];
        };
    }>;
}
export {};
