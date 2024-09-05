import { NextApiRequest, NextApiResponse } from 'next';
import { getConnection, query } from '../../../app/api/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const connection = await getConnection();

    if (req.method === 'POST') {
    try {
      const sqlData = req.body;

      console.log("서버에서 받은 데이터:", sqlData);

      const insertSql = `
        INSERT INTO managerpage (date,coin)
        VALUES (?, ?)
      `;

      const values = [
        sqlData.date,
        sqlData.coin
      ];

      await query(connection, insertSql, values);

      res.status(200).json({ message: '리뷰가 성공적으로 저장되었습니다' });
    } catch (error) {
      console.error('리뷰 저장 중 오류 발생:', error);
      res.status(500).json({ message: '서버 오류: 리뷰를 저장할 수 없습니다' });
    } finally {
      connection.release();
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
