import prismaClient from "../../prisma";
import { compare, hash } from "bcryptjs";
import { sign } from 'jsonwebtoken';

interface ChangePasswordRequest {
    userId: string;
    oldPassword: string;
    newPassword: string;
}

class UpdatePasswordService {
    async execute({ userId, oldPassword, newPassword }: ChangePasswordRequest) {
        // Verificar se o usuário existe
        const user = await prismaClient.user.findUnique({
            where: { id: userId }
        });
        if (!user) {
            throw new Error("Usuário não encontrado!");
        }
        // Verificar se a senha antiga está correta
        const oldPasswordMatch = await compare(oldPassword, user.password);
        if (!oldPasswordMatch) {
            throw new Error("Senha antiga incorreta!");
        }
        // Gerar novo hash de senha
        const newPasswordHash = await hash(newPassword, 8);
        // Atualizar a senha no banco de dados
        const updatedUser = await prismaClient.user.update({
            where: {
                id: user.id
            },
            data: {
                password: newPasswordHash
            }
        });
        // Gerar novo token de autenticação
        const token = sign(
            {
                name: updatedUser.name,
                email: updatedUser.email
            },
            process.env.JWT_SECRET,
            {
                subject: updatedUser.id,
                expiresIn: '30d'
            }
        );
        // Retornar o usuário atualizado e o novo token de autenticação
        return {
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            token: token,
            message: "Senha atualizada com sucesso!"
        };
    }
}

export { UpdatePasswordService };
