import type { NextApiRequest, NextApiResponse } from 'next'
import { ErrorAPI, ClienteRowProps } from '../../../interfaces'

const getCliente = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/clientes`);
  const json = await response.json() as ClienteRowProps[];
  const cliente = json.find((cliente) => cliente.id === Number(id));
  if (cliente) {
    return cliente;
  }
  else {
    return {
      message: "Cliente no encontrado"
    } as ErrorAPI;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ClienteRowProps | ErrorAPI>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({
      message: "Solamente se aceptan GET"
    })
  }

  const {
    query: { id }
  } = req;

  const responseData = await getCliente(id as string);

  return res.status(200).json(responseData);
}
