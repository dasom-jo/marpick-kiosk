// pages/api/payment/fail.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // 로그를 찍어서 요청의 내용을 확인합니다.
        console.log('Payment failed');

        // 요청 처리 로직 추가
        res.status(200).json({ success: false });
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
