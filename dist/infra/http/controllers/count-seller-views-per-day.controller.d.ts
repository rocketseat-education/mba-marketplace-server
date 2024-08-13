import { z } from 'zod';
import { CountSellerViewsPerDayUseCase } from '@domain/marketplace/application/use-cases/count-seller-views-per-day.use-case';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const querySchema: z.ZodObject<{
    from: z.ZodDefault<z.ZodOptional<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    from: Date;
}, {
    from?: Date | undefined;
}>;
export declare class CountSellerViewsPerDayController {
    private countSellerViewsPerDay;
    constructor(countSellerViewsPerDay: CountSellerViewsPerDayUseCase);
    handle(user: UserPayload, query: z.infer<typeof querySchema>): Promise<{
        viewsPerDay: {
            date: Date;
            amount: number;
        }[];
    }>;
}
export {};
