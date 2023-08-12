import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function main() {
    await prismaClient.user.create({data: {
        name: "admin",
        cpf: "00000000000",
        email: "admin@gmail.com",
        password: "1234Ab",
        role: "admin",
        telefone: "",
        user: "admin",
    }});
}

main().then( async () => {
    await prismaClient.$disconnect();
}).catch( async (error) => {
    console.log(error);
    await prismaClient.$disconnect();
    process.exit(1)
})