import fs from 'fs';
import path from 'path';
import prismaClient from '../../prisma';
import { UPLOADS_PATH } from '../../config/constants';

interface DeleteImageRequest {
    id: string;
}

class DeleteImageService {
    async execute({ id }: DeleteImageRequest) {
        const image = await prismaClient.imagem.findUnique({
            where: {
                id: id,
            },
        });

        if (!image) {
            throw new Error('Imagem não encontrada no banco');
        }

        const imagePath = path.join(UPLOADS_PATH, image.url);

        if (!fs.existsSync(imagePath)) {
            throw new Error('Imagem não encontrada no disco');
        }

        fs.unlinkSync(imagePath);

        const result = await prismaClient.imagem.delete({
            where: {
                id: id,
            },
        });

        return result;
    }
}

export { DeleteImageService };
