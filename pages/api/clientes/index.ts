import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, ClienteRowProps } from '../../../interfaces'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ClienteRowProps[] | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  return res.status(200).json([
    {
      id: 1,
      nombre: "Manolo",
      apellido: "Perez",
      telefono: "+34 654 789 456",
      email: "manolo.perez@gmail.com",
      foto: "https://this-person-does-not-exist.com/img/avatar-a216c3dd2220f8e7b65681ca2ed0f134.jpg",
    },
    {
      id: 2,
      nombre: "Juan",
      apellido: "Francisco",
      telefono: "+34 728 589 358",
      email: "juan.francisco@gmail.com",
      foto: "https://this-person-does-not-exist.com/img/avatar-3c64e52cbe48b53b21334c14d62f9335.jpg",
    },
    {
      id: 3,
      nombre: "Mario",
      apellido: "Chochanski",
      telefono: "+34 648 489 147",
      email: "mario.chochanski@gmail.com",
      foto: "https://this-person-does-not-exist.com/img/avatar-37937d1c41fbf3ce33ff16b632e2248b.jpg",
    },
    {
      id: 4,
      nombre: "Abdullah",
      apellido: "Awan",
      telefono: "+92 987 188 593",
      email: "abdullah.awan@gmail.com",
      foto: "https://this-person-does-not-exist.com/img/avatar-cabfeb5818bc66f128f55bb0d9d284c1.jpg",
    },
  ])
}
