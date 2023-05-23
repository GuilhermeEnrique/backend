import { Request, Response } from "express";
import prismaClient from "../../prisma";

class ProfileImageController {
    async handle(req: Request, res: Response) {
        const user_id = req.user_id;

        try {
            const user = await prismaClient.user.findUnique({
                where: {
                    id: user_id,
                },
                select: {
                    banner: true, // Selecionar apenas o campo 'banner'
                },
            });

            if (!user) {
                return res.status(404).json({ message: "Usuário não encontrado" });
            }

            const imageFileName = user.banner;

            if (!imageFileName) {
                return res.status(404).json({ message: "Imagem do perfil não encontrada" });
            }

            // Construa a URL completa da imagem
            const imageUrl = `${imageFileName}`;

            return res.json({ imageFileName: imageUrl });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Erro ao obter a imagem do perfil" });
        }
    }
}

export { ProfileImageController };
