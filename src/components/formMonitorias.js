import React, { Component, useState } from 'react'
import { Button, Form, Card, Header, Segment, TransitionablePortal } from 'semantic-ui-react'
import Selectmonitor from './select_monitor'





const Formmonitorias = ({refresh}) => {

  const [datos, setDatos] = useState({
    class: '',
    date: '',
    classroom: '',
    monitorId: null
  })
  console.log(datos)
  const [open, setOpen] = useState(false)

  const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


  const editarDatos = (event) =>{}

  const enviarDatos = (event) => {
    event.preventDefault()
   
  if(!datos.class) return
  if(!datos.date) return
  if(!datos.monitorId) return
  if(!datos.classroom) return

    fetch("http://localhost:5000/monitorias", {
      method: 'POST', 
      body: JSON.stringify(datos),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      refresh()
    });
  }



  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)


  return (
    <TransitionablePortal
      closeOnTriggerClick
      onOpen={handleOpen}
      onClose={handleClose}
      openOnTriggerClick
      trigger={
        <div className="ui card-content center aligned" >
          <Button
            content={open ? 'Cancelar' : 'Agregar'}
            negative={open}
            positive={!open}
          />
        </div>
      }
    >
      <Segment style={{ left: '60%', position: 'fixed', top: '10%', zIndex: 1000 }}>
        <Header>Formulario de Monitorias</Header>
        <Form onSubmit={enviarDatos}>
          <Card.Content>
            <Card>
              <Form.Input
                label="Asignatura"
                placeholder='Asignatura'
                type='text'
                name='class'
                onChange={handleInputChange} />
            </Card>
            <Card>
              <Form.Field>
                <label>Monitor Asignado</label>
                <Selectmonitor name="monitorId" onChange={handleInputChange} />
              </Form.Field>
            </Card>
            <Card>
              <Form.Input
                label="Fecha"
                placeholder='Fecha'
                type='date'
                name='date'
                onChange={handleInputChange} />
            </Card>
            <Card>
              <Form.Input
                label="Salón"
                placeholder='Salón'
                type='text'
                name='classroom'
                onChange={handleInputChange} />
            </Card>
            <Button type='submit'>Crear</Button>
          </Card.Content>
        </Form>
      </Segment>
    </TransitionablePortal>
  )

}


export default Formmonitorias






















