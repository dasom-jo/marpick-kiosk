import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    res.status(200).json({ message: "결제가 완료되었습니다" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
