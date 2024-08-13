import { RegisterViewUseCase } from '@domain/marketplace/application/use-cases/register-view.use-case';
import { EnvService } from '@infra/env/env.service';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
export declare class RegisterViewController {
    private registerView;
    private env;
    constructor(registerView: RegisterViewUseCase, env: EnvService);
    handle(user: UserPayload, productId: string): Promise<{
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
        viewer: {
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
