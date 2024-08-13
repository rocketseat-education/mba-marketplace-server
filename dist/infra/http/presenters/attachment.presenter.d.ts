import { Attachment } from '@domain/marketplace/enterprise/entities/attachment';
import { EnvService } from '@infra/env/env.service';
export declare class AttachmentPresenter {
    static toHTTP(envService: EnvService, attachment: Attachment): {
        id: string;
        url: string;
    };
}
