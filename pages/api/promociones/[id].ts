import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, PromoRowProps } from '../../../interfaces'

const getPromocion = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/promociones`);
  const json = await response.json() as PromoRowProps[];
  const promocion = json.find((promocion) => promocion.id === Number(id));
  if (promocion) {
    return promocion;
  }
  else {
    return {
      message: "Promocion no encontrada"
    } as ErrorAPI;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PromoRowProps | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  const {
    query: { id }
  } = req;

  const responseData = await getPromocion(id as string);

  return res.status(200).json(responseData);
}
