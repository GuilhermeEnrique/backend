import prismaClient from '../../prisma';

interface ImagemRequest {
    url: string;
    personagemId?: string;
    campanhasId?: string;
}

class UploadImageService {
    async execute(filename: string, personagemId?: string, campanhasId?: string): Promise<ImagemRequest> {
        const imagem = await prismaClient.imagem.create({
            data: {
                url: filename,
                personagemId: personagemId,
                campanhasId: campanhasId,
            },
        });

        return {
            url: imagem.url,
            personagemId: imagem.personagemId,
            campanhasId: imagem.campanhasId,
        };
    }
}

export { UploadImageService };
