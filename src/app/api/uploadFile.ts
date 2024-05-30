import { IncomingForm, File } from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new IncomingForm({
      uploadDir,
      keepExtensions: true,
      filename: (name, ext, part) => Date.now() + '-' + part.originalFilename,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Something went wrong' });
      }
      const file = files.file as File;
      const filePath = `/uploads/${file.newFilename}`;
      res.status(200).json({ message: 'File uploaded successfully', filePath });
    });
  } else {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
