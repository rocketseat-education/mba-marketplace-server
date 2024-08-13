import { Product } from '@domain/marketplace/enterprise/entities/product';
import { EnvService } from '@infra/env/env.service';
export declare class ProductPresenter {
    static toHTTP(envService: EnvService, product: Product): {
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
}
