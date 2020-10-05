import React, { useState } from 'react'
import {
  Button,
  Form,
  Card,
  Header,
  Segment,
  TransitionablePortal
} from 'semantic-ui-react'

const error = {
  required: {
    content: 'Campo obligatorio',
    pointing: 'below',
  }
}
const error2 = {
  required: {
    content: 'Email obligatorio o incorrecto',
    pointing: 'below',
  }
}

const REGEX_EMAIL = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

const Formmonitores = () => {

  const [datos, setDatos] = useState({
    firstname: '',
    firstnameChange: false,
    lastname: '',
    lastnameChange: false,
    program: '',
    programChange: false,
    semester: '',
    semesterChange: false,
    documentnumber: '',
    documentnumberChange: false,
    phone: '',
    phoneChange: false,
    email: '',
    emailChange: false,
    birthday: '',
    birthdayChange: false,
    address: '',
    addressChange: false,
    homenumber: '',
    homenumberChange: false,
  })



  const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


  const enviarDatos = (event) => {
    event.preventDefault()
    let validate = false;
    let validateFields = { ...datos }
    if (!datos.firstname) {
      validateFields = { ...validateFields, firstnameChange: true }
      validate = true;
    }
    if (!datos.lastname) {
      validateFields = { ...validateFields, lastnameChange: true }
      validate = true;
    }
    if (!datos.program) {
      validateFields = { ...validateFields, programChange: true }
      validate = true;
    }
    if (!datos.semester) {
      validateFields = { ...validateFields, semesterChange: true }
      validate = true;
    }
    if (!datos.documentnumber) {
      validateFields = { ...validateFields, documentnumberChange: true }
      validate = true;
    }
    if (!datos.phone) {
      validateFields = { ...validateFields, phoneChange: true }
      validate = true;
    }
    if (!REGEX_EMAIL.test(datos.email)) {
      validateFields = { ...validateFields, emailChange: true }
      validate = true;
    }

    if (!datos.birthday) {
      validateFields = { ...validateFields, birthdayChange: true }
      validate = true;
    }
    if (!datos.address) {
      validateFields = { ...validateFields, addressChange: true }
      validate = true;
    }
    if (!datos.homenumber) {
      validateFields = { ...validateFields, homenumberChange: true }
      validate = true;
    }
    console.log(validateFields)
    if (validate) {
      setDatos({ ...validateFields })
      return
    }

    fetch("http://localhost:5000/monitor", {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        window.location.reload();
      });
  }

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)


  return (
    <TransitionablePortal
      closeOnTriggerClick
      onOpen={handleOpen}
      onClose={handleClose}
      openOnTriggerClick
      trigger={
        <Button
          style={{ marginBottom: 10 }}
          floated="right"
          content={open ? 'Cancelar' : 'Agregar'}
          negative={open}
          positive={!open}
        />
      }>
      <Segment style={{ left: '20%', position: 'fixed', top: '20%', zIndex: 1000 }}>
        <Header>Formulario de Monitores</Header>
        <Form onSubmit={enviarDatos}>
          <Card.Content>
            <Form.Group widths='equal'>
              <Form.Input
                label="Nombre"
                placeholder='Nombre'
                type='text'
                name='firstname'
                onChange={handleInputChange}
                error={!datos.firstname.trim() && datos.firstnameChange ? error.required : null}
              />
              <Form.Input
                label="Apellido"
                placeholder='Apellido'
                type='text'
                name='lastname'
                onChange={handleInputChange}
                error={!datos.lastname.trim() && datos.lastnameChange ? error.required : null}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                label="Programa"
                placeholder='Programa'
                type='text'
                name='program'
                onChange={handleInputChange}
                error={!datos.program.trim() && datos.programChange ? error.required : null}
              />
              <Form.Input
                label="Semestre"
                placeholder='Semestre'
                type='text'
                name='semester'
                onChange={handleInputChange}
                error={!datos.semester.trim() && datos.semesterChange ? error.required : null}
              />
              <Form.Input
                label="Documento de identidad"
                placeholder='Documento de identidad'
                type='text'
                name='documentnumber'
                onChange={handleInputChange}
                error={!datos.documentnumber.trim() && datos.documentnumberChange ? error.required : null}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                label="Celular"
                placeholder='Celular'
                type='text'
                name='phone'
                onChange={handleInputChange}
                error={!datos.phone.trim() && datos.phoneChange ? error.required : null}
              />
              <Form.Input
                label="Correo"
                placeholder='Correo'
                type='text'
                name='email'
                onChange={handleInputChange}
                error={!REGEX_EMAIL.test(datos.email) && datos.emailChange ? error2.required : null}
              />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input
                label="Fecha de nacimiento"
                placeholder='Fecha de nacimiento'
                type='date'
                name='birthday'
                onChange={handleInputChange}
                error={datos.birthdayChange ? error.required : null}
              />
              <Form.Input
                label="Dirección"
                placeholder='Dirección'
                type='text'
                name='address'
                onChange={handleInputChange}
                error={!datos.address.trim() && datos.addressChange ? error.required : null}
              />
              <Form.Input
                label="Teléfono"
                placeholder='Teléfono'
                type='text'
                name='homenumber'
                onChange={handleInputChange}
                error={!datos.homenumber.trim() && datos.homenumberChange ? error.required : null}
              />
            </Form.Group>
            <Card type='submit' style={{
              right: '0',
              width: '90px',
              float: 'right',
              bottom: '0',
              marginBottom: '15px',
              marginRight: '15px'
            }}>
              <Button inverted color='blue'>Crear</Button>
            </Card>
          </Card.Content>
        </Form>
      </Segment>
    </TransitionablePortal>
  )
}


export default Formmonitores
