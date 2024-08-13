import { Count, ViewsPerDay, ViewsRepository } from '@domain/marketplace/application/repositories/views.repository';
import { View } from '@domain/marketplace/enterprise/entities/view';
import { PrismaService } from '@infra/database/prisma/prisma.service';
export declare class PrismaViewsRepository implements ViewsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    countPerDay(params: Count): Promise<ViewsPerDay[]>;
    count(params: Count): Promise<number>;
    isViewed(view: View): Promise<boolean>;
    create(view: View): Promise<View>;
}
