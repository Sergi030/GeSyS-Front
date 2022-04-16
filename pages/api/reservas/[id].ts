import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, ReservaRowProps } from '../../../interfaces'

const getReserva = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/reservas`);
  const json = await response.json() as ReservaRowProps[];
  const averia = json.find((averia) => averia.id === Number(id));
  if (averia) {
    return averia;
  }
  else {
    return {
      message: "Avería no encontrada"
    } as ErrorAPI;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReservaRowProps | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  const {
    query: { id }
  } = req;

  const responseData = await getReserva(id as string);

  return res.status(200).json(responseData);
}
