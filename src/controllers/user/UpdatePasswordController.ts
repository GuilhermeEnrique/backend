import { Request, Response } from "express";
import { UpdatePasswordService } from "../../services/user/UpdatePasswordService";
class UpdatePasswordController {
    async handle(req: Request, res: Response) {
        // extrair as informações do corpo da solicitação:
        const { userId, oldPassword, newPassword } = req.body;

        const updatePasswordService = new UpdatePasswordService();

        const novaSenha = await updatePasswordService.execute({
            userId,
            oldPassword,
            newPassword
        });

        return res.json(novaSenha);
    }
}
export { UpdatePasswordController }
