import { z } from 'zod';
import { MarkSellAsAvailableUseCase } from '@domain/marketplace/application/use-cases/mark-sell-as-available.use-case';
import { MarkSellAsCancelledUseCase } from '@domain/marketplace/application/use-cases/mark-sell-as-cancelled.use-case';
import { MarkSellAsSoldUseCase } from '@domain/marketplace/application/use-cases/mark-sell-as-sold.use-case';
import { EnvService } from '@infra/env/env.service';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const paramsSchema: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodEnum<["available", "cancelled", "sold"]>;
}, "strip", z.ZodTypeAny, {
    status: "available" | "sold" | "cancelled";
    id: string;
}, {
    status: "available" | "sold" | "cancelled";
    id: string;
}>;
export declare class ChangeProductStatusController {
    private markSellAsAvailable;
    private markSellAsCancelled;
    private markSellAsSold;
    private envService;
    private ACTION;
    constructor(markSellAsAvailable: MarkSellAsAvailableUseCase, markSellAsCancelled: MarkSellAsCancelledUseCase, markSellAsSold: MarkSellAsSoldUseCase, envService: EnvService);
    handle(params: z.infer<typeof paramsSchema>, user: UserPayload): Promise<{
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
