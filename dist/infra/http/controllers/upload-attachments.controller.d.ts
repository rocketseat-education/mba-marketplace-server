import { UploadAttachmentUseCase } from '@domain/marketplace/application/use-cases/upload-attachments.use-case';
import { EnvService } from '@infra/env/env.service';
export declare class UploadAttachmentsController {
    private uploadAttachment;
    private env;
    constructor(uploadAttachment: UploadAttachmentUseCase, env: EnvService);
    handle(files: Express.Multer.File[]): Promise<{
        attachments: {
            id: string;
            url: string;
        }[];
    }>;
}
