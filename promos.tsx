import { Table } from '@mantine/core';
import { NextPage } from 'next';
import { ActionIcon } from '@mantine/core';
import { Adjustments, InfoSquare,  DotsVertical, Search } from 'tabler-icons-react';
import { Center } from '@mantine/core';
import { Menu, Button } from '@mantine/core';

const  Promociones: NextPage =() => {
    return (
      <main>
            <head>
                <title>Promocions</title>
            </head> 
            <body>
              <h1>PROMOS</h1>   
              <Table striped>
                <thead>
                  <tr>
                    <th>Estación</th>
                    <th>Descuento</th>
                    <th>Cupones Usados</th>
                    <th>Fecha inicio</th>
                    <th>Fecha fin</th>
                   

                  </tr>
                  
                    
                </thead>
                <tbody>
                    <tr key = "VG1">
                      <td>VG1</td>
                      <td>30%</td>
                      <td>50/100</td>
                      <td>18/03/22</td>
                      <td>20/03/22</td>
                      <Center  style={{ width: 10, height: 40 }}>
                        <ActionIcon color="dark" radius="md">
                          <DotsVertical />
                        </ActionIcon>
                      </Center>
                      
                    </tr>
                     <tr key = "VG2">
                     <td>VG2</td>
                     <td>15%</td>
                     <td>24/100</td>
                     <td>22/03/22</td>
                     <td>25/03/22</td>
                     <Menu control={
                      <Center  style={{ width: 10, height: 40 }}>
                        <ActionIcon color="dark" radius="md">
                          <DotsVertical />
                        </ActionIcon>
                        </Center>
                      }>
                     <Menu.Item >Activar</Menu.Item> 
                     <Menu.Item >Desactivar</Menu.Item> 
                     <Menu.Item >Más</Menu.Item> 
                     </Menu>
                     
                   </tr>
                </tbody>
 
              </Table>
            </body>
           

    </main> 
    
    )   
}
export default Promociones