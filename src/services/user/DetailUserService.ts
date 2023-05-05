import prismaClient from "../../prisma";

class DetailUserService {
    async execute(user_id: string) {

        const users = await prismaClient.user.findMany({
            select:{
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