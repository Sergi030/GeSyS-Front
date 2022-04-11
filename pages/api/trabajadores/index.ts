import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, TrabajadorRowProps } from '../../../interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TrabajadorRowProps[] | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  return res.status(200).json([{
    id: 1,
    nombre: "Sergio Sanchez",
    rol: "Boss",
    ultimoAcceso: new Date("2022-04-10"), 
    foto: 'https://this-person-does-not-exist.com/img/avatar-24e680fe0351d832da161d181ffbee5a.jpg'
  },
  {
    id: 2,
    nombre: "Alfredo Manresa Martinez",
    rol: "Administrador",
    ultimoAcceso: new Date("2022-04-11"), 
    foto: 'https://lh3.googleusercontent.com/a-/AOh14GiTFP4e-OiBF49fsn13bU2bPCMdWjJOHWdipJK-=s83-c-mo'
  }, 
  {
    id: 3,
    nombre: "Marc Capdevila",
    rol: "Administrador",
    ultimoAcceso: new Date("2022-04-09"), 
    foto: 'https://this-person-does-not-exist.com/img/avatar-9c6917e7c9643d18bc26252599e65953.jpg'
  },
  {
    id: 4,
    nombre: "Eduardo Pinto",
    rol: "Trabajador",
    ultimoAcceso: new Date("2022-04-11"), 
    foto: 'https://this-person-does-not-exist.com/img/avatar-ecb7ed610b17ca866f32f8d37d43c0ed.jpg'
  }])
}
