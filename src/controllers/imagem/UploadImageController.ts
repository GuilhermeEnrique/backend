import { Request, Response } from "express";
import { UploadImageService } from "../../services/imagem/UploadImageService";
import prisma from "../../prisma";

class UploadImageController {
    async handle(request: Request, response: Response) {
        const { personagemId, campanhasId } = request.body;

        if (!request.file) {
            return response.status(400).json({ error: "No file uploaded" });
        }

        const uploadImageService = new UploadImageService();
        const imagem = await uploadImageService.execute(request.file.filename, personagemId, campanhasId);

        return response.status(201).json(imagem);
    }
}


export { UploadImageController };
