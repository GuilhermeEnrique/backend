import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, biografia, password } = req.body;
        const createUserService = new CreateUserService();

        if (!req.file) {
            throw new Error("Error upload file");
        } else {
            const { originalname, filename: banner } = req.file;
            const user = await createUserService.execute({
                name,
                email,
                banner,
                biografia,
                password
            });
            return res.json(user)
        }
    }
}

export { CreateUserController }