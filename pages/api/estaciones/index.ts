import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, EstacionRowProps } from '../../../interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EstacionRowProps[] | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  return res.status(200).json([{
    id: 1,
    nombre: "VGA1",
    direccion: "Av. Victor Balaguer nº1",
    KWH: 350,
    maxKWH: 720,
    ocupacion: 50,
    maxOcupacion: 100,
    superficie: 3000,
    encargado: "???????",
  },
  {
    id: 2,
    nombre: "VGA2",
    direccion: "Rambla Exposició nº1",
    KWH: 200,
    maxKWH: 540,
    ocupacion: 27,
    maxOcupacion: 70,
    superficie: 1000,
    encargado: "???????",
  }])
}
