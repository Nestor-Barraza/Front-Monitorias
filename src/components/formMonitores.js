import React, { useState } from 'react'
import { Button, Form, Card, Header, Segment, TransitionablePortal } from 'semantic-ui-react'






const Formmonitores = ({refresh}) => {

  const [datos, setDatos] = useState({
    firstname: '',
    lastname: '',
    program: '',
    semester:'',
    documentnumber:'',
    phone:'',
    email:'',
    birthday:'',
    address:'',
    homenumber:'',
    
  })
  console.log(datos)
  const [open, setOpen] = useState(false)

  const handleInputChange = (e, { value, name }) => setDatos({ ...datos, [name]: value });


  const editarDatos = (event) =>{}

  const enviarDatos = (event) => {
    event.preventDefault()
   
  if(!datos.firstname) return
  if(!datos.lastname) return
  if(!datos.program) return
  if(!datos.semester) return
  if(!datos.documentnumber) return
  if(!datos.phone) return
  if(!datos.email) return
  if(!datos.birthday) return
  if(!datos.address) return
  if(!datos.homenumber) return

    fetch("http://localhost:5000/monitor", {
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
      <Segment style={{ left: '30%', position: 'fixed', top: '10%', zIndex: 1000 }}>
        <Header>Formulario de Monitores</Header>
        <Form onSubmit={enviarDatos}>
          <Card.Content>
          <Form.Group widths='equal'>
           
              <Form.Input
                label="Nombre"
                placeholder='Nombre'
                type='text'
                name='firstname'
                onChange={handleInputChange} />
                         
                <Form.Input
                label="Apellido"
                placeholder='Apellido'
                type='text'
                name='lastname'
                onChange={handleInputChange} />

                                        
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Input
                label="Programa"
                placeholder='Programa'
                type='text'
                name='program'
                onChange={handleInputChange} />

            <Form.Input
                label="Semestre"
                placeholder='Semestre'
                type='text'
                name='semester'
                onChange={handleInputChange} />

             <Form.Input
                label="Documento de identidad"
                placeholder='Documento de identidad'
                type='text'
                name='documentnumber'
                onChange={handleInputChange} />

            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input
                label="Celular"
                placeholder='Celular'
                type='text'
                name='phone'
                onChange={handleInputChange} />
            

            <Form.Input
                label="Correo"
                placeholder='Correo'
                type='text'
                name='email'
                onChange={handleInputChange} />
            </Form.Group>

            <Form.Group widths='equal'>
            <Form.Input
                label="Fecha de nacimiento"
                placeholder='Fecha de nacimiento'
                type='date'
                name='birthday'
                onChange={handleInputChange} />

            <Form.Input
                label="Dirección"
                placeholder='Dirección'
                type='text'
                name='address'
                onChange={handleInputChange} />

            <Form.Input
                label="Teléfono"
                placeholder='Teléfono'
                type='text'
                name='homenumber'
                onChange={handleInputChange} /> 

            </Form.Group>
                      
            <Button type='submit' >Crear</Button>
          </Card.Content>
        </Form>
      </Segment>
    </TransitionablePortal>
  )

}


export default Formmonitores
