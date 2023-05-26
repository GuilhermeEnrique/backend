import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, biografia } = req.body;
        const updateUserService = new UpdateUserService();

        if (req.file) {
            // Se o campo do arquivo estiver presente na requisição, atualize a imagem
            const { originalname, filename: banner } = req.file;
            const updatedUser = await updateUserService.execute({
                userId: req.user_id,
                name,
                email,
                biografia,
                banner,
            });
            return res.json(updatedUser)
        } else {
            // Se o campo do arquivo não estiver presente, atualize apenas os outros dados
            const updatedUser = await updateUserService.execute({
                userId: req.user_id,
                name,
                email,
                biografia
            });
            return res.json(updatedUser)
        }


    }
}

export { UpdateUserController };
