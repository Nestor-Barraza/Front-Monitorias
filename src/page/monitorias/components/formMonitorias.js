import React, { useState } from 'react'
import { Button, Form, Card, Header, Segment, Popup } from 'semantic-ui-react'
import Selectmonitor from '../../monitores/components/select_monitor'


const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}



const Formmonitorias = ({ refresh }) => {


  const [datos, setDatos] = useState({
    class: '',
    classChange: false,
    date: '',
    dateChange: false,
    classroom: '',
    classroomChange: false,
    monitorId: null,
    monitorIdChange: false,
  })
  const [open, setOpen] = useState(false)

  const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value, [`${name}Change`]: true });


  const enviarDatos = (event) => {
    event.preventDefault()
    let validate = false;
    let validateFields = { ...datos }
    if (!datos.class) {
      validate = true
      validateFields = { ...validateFields, classChange: true }
    }
    if (!datos.date) {
      validateFields = { ...validateFields, dateChange: true }
      validate = true
    }
    if (!datos.monitorId) {
      validateFields = { ...validateFields, monitorIdChange: true }
      validate = true
    }
    if (!datos.classroom) {
      validateFields = { ...validateFields, classroomChange: true }
      validate = true
    }

    if (validate) {
      setDatos({ ...validateFields })
      return
    }

    fetch("http://localhost:5000/monitorias", {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        refresh()
        setDatos({
          class: '',
          classChange: false,
          date: '',
          dateChange: false,
          classroom: '',
          classroomChange: false,
          monitorId: null,
          monitorIdChange: false,
        })
      });
  }



  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }


  return (
    <>
      {React.cloneElement(
        <Button
          floated="right"
          positive
          style={{ marginBottom: 10 }}
          content={'Agregar'}
          onClick={handleOpen}
        />
      )}
      <Popup
        open={open}
        onClose={handleClose}
      >
        <Segment style={{
          position: 'fixed',
          top: 40,
          left: 60
        }}>
          <Form onSubmit={enviarDatos} >
            <Header>Formulario de Monitorias</Header>
            <Card.Content  >
              <Button
                floated="right"
                style={{ marginBottom: 80, background: '#000', color: '#FFF', position: 'absolute', top: '0', right: '0' }}
                content={'X'}
                onClick={handleClose}
              />
              <Card>
                <Form.Input
                  label="Asignatura"
                  placeholder='Asignatura'
                  type='text'
                  name='class'
                  value={datos.class}
                  error={!datos.class.trim() && datos.classChange ? error.required : null}
                  onChange={handleInputChange} />
              </Card>
              <Card>
                <Form.Field>
                  <label>Monitor Asignado</label>
                  <Selectmonitor
                    name="monitorId"
                    value={datos.monitorId}
                    onChange={handleInputChange}
                    error={!datos.monitorId && datos.monitorIdChange ? true : false} />
                </Form.Field>
              </Card>
              <Card>
                <Form.Input
                  label="Fecha"
                  value={datos.date}
                  placeholder='Fecha'
                  type='date'
                  name='date'
                  error={!datos.date.trim() && datos.dateChange ? error.required : null}
                  onChange={handleInputChange} />
              </Card>
              <Card>
                <Form.Input
                  label="Salón"
                  placeholder='Salón'
                  type='text'
                  value={datos.classroom}
                  name='classroom'
                  error={!datos.classroom.trim() && datos.classroomChange ? error.required : null}
                  onChange={handleInputChange} />
              </Card>
              <Button type='submit' positive>Crear</Button>
            </Card.Content>
          </Form>
        </Segment>
      </Popup>
    </>
  )
}


export default Formmonitorias






















