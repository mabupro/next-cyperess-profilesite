import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse,
) {
    try {
        const articles = await sql`SELECT * FROM Articles ORDER BY CreatedAt DESC;`; 
        return response.status(200).json({ articles });
    } catch (error) {
        return response.status(500).json({ error: '記事の取得に失敗しました。' });
    }
}
