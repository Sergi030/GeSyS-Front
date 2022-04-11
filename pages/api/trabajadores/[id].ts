import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, TrabajadorRowProps } from '../../../interfaces'

const getTrabajador = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/trabajadores`);
  const json = await response.json() as TrabajadorRowProps[];
  const trabajador = json.find((trabajador) => trabajador.id === Number(id));
  if (trabajador) {
    return trabajador;
  }
  else {
    return {
      message: "trabajador no encontrada"
    } as ErrorAPI;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TrabajadorRowProps | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  const {
    query: { id }
  } = req;

  const responseData = await getTrabajador(id as string);

  return res.status(200).json(responseData);
}
