import React, { useState } from 'react';
import { Card, Form, Header, Button, Modal } from 'semantic-ui-react'



const Editmonitor = ({ item, trigger, refresh }) => {

  //Solicitar datos
  const [state, setState] = useState({
    firstname: item.firstname,
    lastname: item.lastname,
    program: item.program,
    semester: item.semester,
    documentnumber: item.documentnumber,
    phone: item.phone,
    email: item.email,
    birthday: item.birthday,
    address: item.address,
    homenumber: item.homenumber
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
    fetch(`http://localhost:5000/monitor/${item.id}`, {
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
          <Header>Formulario de Monitores</Header>


          <Form onSubmit={actualizarDatos}>

            <Card.Content>

              <Form.Group widths='equal'>
                <Form.Input
                  label="Nombre"
                  placeholder='Nombre'
                  type='text'
                  onChange={handleChangeInput}
                  name='firstname'
                  value={state.firstname} />
                <Form.Input
                  label="Apellido"
                  placeholder='Apellido'
                  type='text'
                  name='lastname'
                  onChange={handleChangeInput}
                  value={state.lastname}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label="Programa"
                  placeholder='Programa'
                  type='text'
                  name='program'
                  onChange={handleChangeInput}
                  value={state.program}

                />
                <Form.Input
                  label="Semestre"
                  placeholder='Semestre'
                  type='text'
                  name='semester'
                  onChange={handleChangeInput}
                  value={state.semester}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label="Documento de identidad"
                  placeholder='Documento de identidad'
                  type='text'
                  name='documentnumber'
                  onChange={handleChangeInput}
                  value={state.documentnumber} />
                <Form.Input
                  label="Celular"
                  placeholder='Celular'
                  type='text'
                  name='phone'
                  onChange={handleChangeInput}
                  value={state.phone}
                />
                <Form.Input
                  label="Correo"
                  placeholder='Correo'
                  type='text'
                  name='email'
                  onChange={handleChangeInput}
                  value={state.email}
                />
              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Input
                  label="Fecha de nacimiento"
                  placeholder='Fecha de nacimiento'
                  type='date'
                  name='birthday'
                  onChange={handleChangeInput}
                  value={state.birthday}
                />
                <Form.Input
                  label="Dirección"
                  placeholder='Dirección'
                  type='text'
                  name='address'
                  onChange={handleChangeInput}
                  value={state.address}
                />
                <Form.Input
                  label="Teléfono"
                  placeholder='Teléfono'
                  type='text'
                  name='homenumber'
                  onChange={handleChangeInput}
                  value={state.homenumber}
                />

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


export default Editmonitor;