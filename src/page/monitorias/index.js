import React, { useEffect, useState } from 'react';
import { Table, Button, Segment, Header } from 'semantic-ui-react'
import Editmonitoria from './components/editMonitoria';
import Formmonitorias from './components/formMonitorias';






function Monitorias({ refresh }) {
  const [monitorias, setMonitorias] = useState([]);

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('http://localhost:5000/monitorias')
    const monitoria = await data.json()
    setMonitorias(monitoria)
  }


  //eliminar monitoria
  const deleteMonitoria = (id) => {
    fetch(`http://localhost:5000/monitorias/${id}`, {
      method: 'DELETE',
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        obtenerDatos()
      });
  }




  return (
    <Segment >
      <Header>Formulario de Monitorias</Header>
      <Formmonitorias refresh={obtenerDatos} />
      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Asignatura</Table.HeaderCell>
            <Table.HeaderCell>Monitor Asignado</Table.HeaderCell>
            <Table.HeaderCell>Fecha</Table.HeaderCell>
            <Table.HeaderCell>Salón</Table.HeaderCell>
            <Table.HeaderCell>Acción</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {monitorias.map((item, key) => (
            <Table.Row key={key}>
              <Table.Cell>{item.class}</Table.Cell>
              <Table.Cell>{`${item.monitor.firstname} ${item.monitor.lastname}`}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>{item.classroom}</Table.Cell>
              <Table.Cell>
                <Editmonitoria
                  refresh={obtenerDatos}
                  trigger={
                    <Button
                      icon='edit'
                      style={{ color: 'black' }} />
                  }
                  item={item} />
                <Button icon='user times' style={{ background: 'black', color: 'white' }} onClick={() => { deleteMonitoria(item.id) }} />
              </Table.Cell>
            </Table.Row>
          ))}   
        </Table.Body>
      </Table>

    </Segment>
  );

}

export default Monitorias;