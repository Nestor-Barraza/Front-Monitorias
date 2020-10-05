import React, { useState } from 'react';
import { Card, Form, Header, Button, Modal } from 'semantic-ui-react'
import Selectmonitor from '../../monitores/components/select_monitor'


const Editmonitoria = ({ item, trigger, refresh }) => {

  //Solicitar datos
  const [state, setState] = useState({
    class: item.class,
    monitorId: item.monitorId,
    classroom: item.classroom,
    date: item.date,

  });
  const [open, setOpen] = useState(false)

  const handleChangeInput = (e, { name, value }) => {
    setState({ ...state, [name]: value })
  }

  //actualizar

  const actualizarDatos = (e) => {
    e.preventDefault();
    var formData = new FormData();
    const keys = Object.keys(state)
    for (const key in keys) {
      formData.append(keys[key], state[keys[key]]);
    }
    fetch(`http://localhost:5000/monitorias/${item.id}`, {
      method: 'PUT',
      body: formData
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        refresh();
        setOpen(false)
      });
  }



  //React.cloneElement(jsx, {...eventos})

  return (
    <>
      {React.cloneElement(trigger, { onClick: () => setOpen(true) })}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Content>
          <Header>Formulario de Monitoria</Header>
          <Form onSubmit={actualizarDatos}>
            <Card.Content>
              <Form.Group widths='equal'>
                <Form.Input
                  label="Asignatura"
                  placeholder='Asignatura'
                  type='text'
                  onChange={handleChangeInput}
                  name='class'
                  value={state.class} />
                <Form.Field>
                  <label>Monitor Asignado</label>
                  <Selectmonitor
                    label="Monitor"
                    name="monitorId"
                    value={state.monitorId}
                    onChange={handleChangeInput} />
                </Form.Field>
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label="Fecha"
                  placeholder='Fecha'
                  type='date'
                  name='date'
                  onChange={handleChangeInput}
                  value={state.date} />
                <Form.Input
                  label="Salón"
                  placeholder='Salón'
                  type='text'
                  name='classroom'
                  onChange={handleChangeInput}
                  value={state.classroom} />
              </Form.Group>
              <Card type='submit' style={{
                right: '0',
                width: '100px',
                float: 'right',
                bottom: '0',
                marginBottom: '15px',
                marginRight: '15px'
              }}>
                <Button onClick={actualizarDatos} inverted color='green' content='Actualizar' ></Button>
              </Card>
            </Card.Content>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  );
}


export default Editmonitoria;