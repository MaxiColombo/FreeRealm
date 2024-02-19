import iconData from "../src/assets/icons.json"

console.log("hola");
export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Devuelve el contenido del archivo JSON como respuesta
      res.status(200).json(iconData);
    } catch (error) {
      // Si ocurre un error al leer el archivo JSON, devuelve un mensaje de error
      res.status(500).json({ error: 'Error al leer el archivo JSON' });
    }
  } else {
    // Si la solicitud no es GET, devuelve un error de método no permitido
    res.status(405).json({ error: 'Método no permitido' });
  }
}