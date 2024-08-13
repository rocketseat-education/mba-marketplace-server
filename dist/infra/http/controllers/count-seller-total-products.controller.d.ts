import { z } from 'zod';
import { CountSellerTotalProductsUseCase } from '@domain/marketplace/application/use-cases/count-seller-total-products.use-case';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const querySchema: z.ZodObject<{
    from: z.ZodDefault<z.ZodOptional<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    from: Date;
}, {
    from?: Date | undefined;
}>;
export declare class CountSellerTotalProductsController {
    private countSellerTotalProducts;
    constructor(countSellerTotalProducts: CountSellerTotalProductsUseCase);
    handle(user: UserPayload, query: z.infer<typeof querySchema>): Promise<{
        amount: number;
    }>;
}
export {};
