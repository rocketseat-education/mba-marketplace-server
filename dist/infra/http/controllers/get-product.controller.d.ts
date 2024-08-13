import { GetProductUseCase } from '@domain/marketplace/application/use-cases/get-product.use-case';
import { EnvService } from '@infra/env/env.service';
export declare class GetProductController {
    private getProduct;
    private envService;
    constructor(getProduct: GetProductUseCase, envService: EnvService);
    handle(id: string): Promise<{
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
