import { Request, Response } from "express";
import { DeleteImageService } from "../../services/imagem/DeleteImagemService";

class DeleteImageController {
    async handle(req: Request, res: Response) {
        const id = req.query.id as string;
        const deleteImage = new DeleteImageService();
        const deletedImage = await deleteImage.execute({
            id
        });

        return res.json(deletedImage);
    }
}

export { DeleteImageController };
