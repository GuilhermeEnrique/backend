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
                banner: true,
                email: true,
            }
        }
        )

        return users;
    }
}

export { DetailUserService }