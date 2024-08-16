import { z } from 'nestjs-zod/z';
import { GetProductUseCase } from '@domain/marketplace/application/use-cases/get-product.use-case';
import { EnvService } from '@infra/env/env.service';
declare const GetProductResponse_base: import("nestjs-zod").ZodDto<{
    product: {
        title: string;
        description: string;
        priceInCents: number;
        owner: {
            name: string;
            id: string;
            email: string;
            phone: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        };
        category: {
            title: string;
            id: string;
            slug: string;
        };
        attachments: {
            id: string;
            url: string;
        }[];
        id: string;
    };
}, z.ZodObjectDef<{
    product: z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        priceInCents: z.ZodNumber;
        owner: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            phone: z.ZodString;
            email: z.ZodString;
            avatar: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                url: string;
            }, {
                id: string;
                url: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            id: string;
            email: string;
            phone: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        }, {
            name: string;
            id: string;
            email: string;
            phone: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        }>;
        category: z.ZodObject<{
            id: z.ZodString;
            title: z.ZodString;
            slug: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            id: string;
            slug: string;
        }, {
            title: string;
            id: string;
            slug: string;
        }>;
        attachments: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            url: string;
        }, {
            id: string;
            url: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        title: string;
        description: string;
        priceInCents: number;
        owner: {
            name: string;
            id: string;
            email: string;
            phone: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        };
        category: {
            title: string;
            id: string;
            slug: string;
        };
        attachments: {
            id: string;
            url: string;
        }[];
        id: string;
    }, {
        title: string;
        description: string;
        priceInCents: number;
        owner: {
            name: string;
            id: string;
            email: string;
            phone: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        };
        category: {
            title: string;
            id: string;
            slug: string;
        };
        attachments: {
            id: string;
            url: string;
        }[];
        id: string;
    }>;
}, "strip", z.ZodTypeAny>, {
    product: {
        title: string;
        description: string;
        priceInCents: number;
        owner: {
            name: string;
            id: string;
            email: string;
            phone: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        };
        category: {
            title: string;
            id: string;
            slug: string;
        };
        attachments: {
            id: string;
            url: string;
        }[];
        id: string;
    };
}>;
declare class GetProductResponse extends GetProductResponse_base {
}
export declare class GetProductController {
    private getProduct;
    private envService;
    constructor(getProduct: GetProductUseCase, envService: EnvService);
    handle(id: string): Promise<GetProductResponse>;
}
export {};
