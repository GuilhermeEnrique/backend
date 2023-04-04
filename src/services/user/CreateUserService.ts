import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UserRequest {
    name: string;
    email: string;
    biografia: string;
    password: string;
}

class CreateUserService {
    async execute({ name, biografia, email, password }: UserRequest) {
        //verificar se enviou um email
        if (!email) {
            throw new Error("E-mail incorrect")
        }

        //verificar se email já esta cadastrado no banco
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                biografia: biografia,
                password: passwordHash,
            },
            select:{
                id: true,
                name: true,
                email: true,
            }
        })

        return user;
    }
}
export { CreateUserService }