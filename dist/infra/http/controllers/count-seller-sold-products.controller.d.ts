import { z } from 'zod';
import { CountSellerSoldProductsUseCase } from '@domain/marketplace/application/use-cases/count-seller-sold-products.use-case';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const querySchema: z.ZodObject<{
    from: z.ZodDefault<z.ZodOptional<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    from: Date;
}, {
    from?: Date | undefined;
}>;
export declare class CountSellerSoldProductsController {
    private countSellerSoldProducts;
    constructor(countSellerSoldProducts: CountSellerSoldProductsUseCase);
    handle(user: UserPayload, query: z.infer<typeof querySchema>): Promise<{
        amount: number;
    }>;
}
export {};
