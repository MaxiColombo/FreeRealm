import iconData from "../assets/icons.json";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(iconData);
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}