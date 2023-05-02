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
            }
        })

        return campanha;
    }
}

export { ListCampanhaService }