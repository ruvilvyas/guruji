import { NextApiRequest, NextApiResponse } from 'next';

let aboutContent = { content: "Initial about me text" }; // Later replace with DB

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(aboutContent);
  }

  if (req.method === "POST") {
    aboutContent = req.body;
    return res.status(200).json({ message: "Updated successfully" });
  }

  res.status(405).end(); // Method Not Allowed
}
