import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {

        const users = await prismaClient.user.findUnique({
            where: {
                id: user_id,
            },
            select: {
                id: true,
                name: true,
                biografia: true,
                email: true,
                banner: true,
            }
        }
        )

        return users;
    }
}

export { DetailUserService }