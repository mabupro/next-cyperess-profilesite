import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
) {
    try {
        const title = request.body.title as string;
        const body = request.body.body as string;
        if (!title || !body) throw new Error('Title and body are required');
        await sql`INSERT INTO Articles (Title, Body) VALUES (${title}, ${body});`;
    } catch (error) {
        return response.status(500).json({ error });
    }

    const articles = await sql`SELECT * FROM Articles;`;
    return response.status(200).json({ articles });
}
