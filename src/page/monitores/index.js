import React, { useEffect, useState } from 'react';
import { Table, Button, Header, Segment } from 'semantic-ui-react'
import Formmonitores from './components/formMonitores';

import Editmonitor from './components/editMonitor';


const Monitores = ({ refresh }) => {
  const [monitores, setMonitores] = useState([]);

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('http://localhost:5000/monitor')
    const monitor = await data.json()
    setMonitores(monitor)

  }


  //eliminar monitor
  const deleteMonitor = (id) => {
    fetch(`http://localhost:5000/monitor/${id}`, {
      method: 'DELETE',
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        obtenerDatos()
      });
  }



  return (
    <Segment>
      <Header>Formulario de Monitores</Header>
      <Formmonitores refresh={obtenerDatos} />
      <Table collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido</Table.HeaderCell>
            <Table.HeaderCell>Programa</Table.HeaderCell>
            <Table.HeaderCell>Semestre</Table.HeaderCell>
            <Table.HeaderCell>Documento</Table.HeaderCell>
            <Table.HeaderCell>Celular</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Fecha de nacimiento</Table.HeaderCell>
            <Table.HeaderCell>Dirección</Table.HeaderCell>
            <Table.HeaderCell>Teléfono</Table.HeaderCell>
            <Table.HeaderCell>Acción</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {monitores.map(item => (
            <Table.Row  key={item.id}>
              <Table.Cell>{item.firstname}</Table.Cell>
              <Table.Cell>{item.lastname}</Table.Cell>
              <Table.Cell>{item.program}</Table.Cell>
              <Table.Cell>{item.semester}</Table.Cell>
              <Table.Cell>{item.documentnumber}</Table.Cell>
              <Table.Cell>{item.phone}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>{item.birthday}</Table.Cell>
              <Table.Cell>{item.address}</Table.Cell>
              <Table.Cell>{item.homenumber}</Table.Cell>
              <Table.Cell>
                <Editmonitor refresh={obtenerDatos} trigger={<Button icon='edit' style={{ color: 'black' }} />} item={item} />
                <Button icon='user times' style={{ background: 'black', color: 'white' }} onClick={() => { deleteMonitor(item.id) }} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Segment>
  );

}

export default Monitores;