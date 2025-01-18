import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'data', 'items.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const items = JSON.parse(jsonData);

  res.status(200).json(items);
}