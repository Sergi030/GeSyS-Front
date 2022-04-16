import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, ReservaRowProps } from '../../../interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReservaRowProps[] | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  return res.status(200).json([
    {
      id: 1,
      reservante: 1,
      matricula: '5930 FTR',
      estacion: 1,
      date: new Date('2020-01-01'),
      duration: 120,
      kwh: 1964,
      money: 5
    },
    {
      id: 2,
      reservante: 5,
      matricula: '9123 BTS',
      estacion: 1,
      date: new Date('2021-05-01'),
      duration: 90,
      kwh: 2500,
      money: 10
    },
    {
      id: 3,
      reservante: 3,
      matricula: '7935 SFL',
      estacion: 1,
      date: new Date('2022-06-15'),
      duration: 90,
      kwh: 1500,
      money: 8
    }
  ])
}
