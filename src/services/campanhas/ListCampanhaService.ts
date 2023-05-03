import { transformDocument } from "@prisma/client/runtime";
import prismaClient from "../../prisma";

interface DetalhesRequest {
    id: string;
}

class ListCampanhaService {
    async execute({ id }: DetalhesRequest) {
        const campanha = await prismaClient.campanhas.findMany({
            where: {
                id: id,
            },
            include: {
                characters: {
                    select: {
                        name: true,
                        description: true,
                        classe: true,
                        level: true,
                        race: true,
                        life: true,
                        banner: true,
                    }
                }
            }
        })

        return campanha;
    }
}

export { ListCampanhaService }