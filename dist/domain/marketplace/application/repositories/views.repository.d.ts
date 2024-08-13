import { View } from '@domain/marketplace/enterprise/entities/view';
export interface Count {
    sellerId: string;
    from: Date;
}
export interface ViewsPerDay {
    date: Date;
    amount: number;
}
export declare abstract class ViewsRepository {
    abstract count(params: Count): Promise<number>;
    abstract countPerDay(params: Count): Promise<ViewsPerDay[]>;
    abstract isViewed(view: View): Promise<boolean>;
    abstract create(view: View): Promise<View>;
}
