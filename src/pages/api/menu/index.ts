import { NextApiRequest, NextApiResponse } from 'next';
import { getConnection, query } from '../../../app/api/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const connection = await getConnection();

    if(req.method === 'GET'){
        try {
            const selectSql =  "SELECT * FROM menu";
            const menus = await query(connection,selectSql);
            return res.status(200).json({menus})
        }catch(error){
            console.error('메뉴데이터를 불러오는데 실패했습니다',error);
            return res.status(500).json({error:"리뷰조회실패"})
        }finally{
            connection.release();
        }
    }else{
        res.setHeader('Allow',['GET']);
        res.status(405).end(`Method ${req.method} not allowed`)
    }
}