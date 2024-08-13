import { User } from '@domain/marketplace/enterprise/entities/user/user';
import { EnvService } from '@infra/env/env.service';
export declare class UserPresenter {
    static toHTTP(envService: EnvService, seller: User): {
        id: string;
        name: string;
        phone: string;
        email: string;
        avatar: {
            id: string;
            url: string;
        } | null;
    };
}
