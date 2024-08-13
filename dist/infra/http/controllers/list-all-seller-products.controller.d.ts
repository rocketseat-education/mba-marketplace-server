import { z } from 'zod';
import { ListAllSellerProductsUseCase } from '@domain/marketplace/application/use-cases/list-all-seller-products.use-case';
import { ProductStatus } from '@domain/marketplace/enterprise/entities/product';
import { EnvService } from '@infra/env/env.service';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const querySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof ProductStatus>>;
}, "strip", z.ZodTypeAny, {
    status?: ProductStatus | undefined;
    search?: string | undefined;
}, {
    status?: ProductStatus | undefined;
    search?: string | undefined;
}>;
export declare class ListAllSellerProductsController {
    private listAllSellerProducts;
    private envService;
    constructor(listAllSellerProducts: ListAllSellerProductsUseCase, envService: EnvService);
    handle(user: UserPayload, query: z.infer<typeof querySchema>): Promise<{
        products: {
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
        }[];
    }>;
}
export {};
