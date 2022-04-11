import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, EstacionRowProps } from '../../../interfaces'

const getEstacion = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/estaciones`);
  const json = await response.json() as EstacionRowProps[];
  const estacion = json.find((estacion) => estacion.id === Number(id));
  if (estacion) {
    return estacion;
  }
  else {
    return {
      message: "Estación no encontrada"
    } as ErrorAPI;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EstacionRowProps | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  const {
    query: { id }
  } = req;

  const responseData = await getEstacion(id as string);

  return res.status(200).json(responseData);
}
