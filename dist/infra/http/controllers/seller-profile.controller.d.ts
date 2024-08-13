import { SellerProfileUseCase } from '@domain/marketplace/application/use-cases/seller-profile.use-case';
import { EnvService } from '@infra/env/env.service';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
export declare class SellerProfileController {
    private sellerProfile;
    private env;
    constructor(sellerProfile: SellerProfileUseCase, env: EnvService);
    handle(user: UserPayload): Promise<{
        seller: {
            id: string;
            name: string;
            phone: string;
            email: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        };
    }>;
}
