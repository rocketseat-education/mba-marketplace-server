import { z } from 'zod';
import { ListAllProductsUseCase } from '@domain/marketplace/application/use-cases/list-all-products.use-case';
import { ProductStatus } from '@domain/marketplace/enterprise/entities/product';
import { EnvService } from '@infra/env/env.service';
declare const querySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof ProductStatus>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    status?: ProductStatus | undefined;
    search?: string | undefined;
}, {
    status?: ProductStatus | undefined;
    search?: string | undefined;
    page?: number | undefined;
}>;
export declare class ListAllProductsController {
    private listAllProducts;
    private envService;
    constructor(listAllProducts: ListAllProductsUseCase, envService: EnvService);
    handle(query: z.infer<typeof querySchema>): Promise<{
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
