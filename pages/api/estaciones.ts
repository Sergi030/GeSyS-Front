import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, EstacionRowProps } from '../../interfaces'

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
    Est: "VGA1",
    Dir: "Av. Victor Balaguer nº1",
    KWH: 350,
    MaxKWH: 720,
    Ocupacion: 50,
    MaxOcupacion: 100,
    m2: 3000,
    enc: "???????",
  },
  {
    Est: "VGA2",
    Dir: "Rambla Exposició nº1",
    KWH: 200,
    MaxKWH: 540,
    Ocupacion: 27,
    MaxOcupacion: 70,
    m2: 1000,
    enc: "???????",
  }])
}
