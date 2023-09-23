import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllArticles() {
    const articles = await prisma.article.findMany({
        include: {
            author: {
                select: {
                    username: true,
                },
            },
        },
    });

    return articles;
}

