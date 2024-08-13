import { ListAllCategoriesUseCase } from '@domain/marketplace/application/use-cases/list-all-categories.use-case';
export declare class ListAllCategoriesController {
    private listAllCategories;
    constructor(listAllCategories: ListAllCategoriesUseCase);
    handle(): Promise<{
        categories: {
            id: string;
            title: string;
            slug: string;
        }[];
    }>;
}
