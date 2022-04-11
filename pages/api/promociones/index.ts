import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, PromoRowProps } from '../../../interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PromoRowProps[] | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  return res.status(200).json([{
    id: 1,
    estacion: "VG1",
    descuento: 30,
    usos: 50,
    usosMax: 100,
    fechaInicio: new Date("2022-03-10"), 
    fechaFin: new Date("2022-05-10"), 
  },
  {
    id: 2,
    estacion: "VG2",
    descuento: 15,
    usos: 27,
    usosMax: 9999999,
    fechaInicio: new Date("2022-02-18"), 
    fechaFin: new Date("2022-04-03"), 
  }])
}
