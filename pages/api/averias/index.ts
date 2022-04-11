import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, AveriaRowProps } from '../../../interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AveriaRowProps[] | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  return res.status(200).json([
    {
      id: 1,
      estacion: "VGA1",
      fecha: new Date("01/01/2022"),
      estado: 'Resuelto',
      descripcion: 'El cargador en la planta 2 plaza 1 no funciona',
    },
    {
      id: 2,
      estacion: "VGA2",
      fecha: new Date("05/03/2022"),
      estado: 'En proceso',
      descripcion: 'El cargador en la planta -1 plaza 3 no funciona',
    },
    {
      id: 3,
      estacion: "VGA1",
      fecha: new Date("09/04/2021"),
      estado: 'Resuelto',
      descripcion: 'El cargador en la planta 3 plaza 5 no funciona',
    },
  ])
}
