import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface UpdateUserRequest {
    userId: string;
    name?: string;
    email?: string;
    biografia?: string;
    banner?: string;
    password?: string;
}

class UpdateUserService {
    async execute({ userId, name, email, biografia, banner, password }: UpdateUserRequest) {
        const user = await prismaClient.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        let passwordHash;
        if (password) {
            passwordHash = await hash(password, 8);
        }

        const updatedUser = await prismaClient.user.update({
            where: {
                id: userId,
            },
            data: {
                name: name || user.name,
                email: email || user.email,
                biografia: biografia || user.biografia,
                banner: banner || user.banner,
                password: passwordHash || user.password,
            },
            select: {
                id: true,
                name: true,
                email: true,
                biografia: true,
                banner: true,
            },
        });

        return updatedUser;
    }
}

export { UpdateUserService };
