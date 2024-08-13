import { Category } from '@domain/marketplace/enterprise/entities/category';
export declare class CategoryPresenter {
    static toHTTP(category: Category): {
        id: string;
        title: string;
        slug: string;
    };
}
