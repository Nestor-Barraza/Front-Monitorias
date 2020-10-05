import React, { useEffect, useState } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react'



const Selectmonitor = ({onChange, name, value, error}) => {
  const [monitores, setMonitores] = useState([]);

  const obtenerDatos = async () => {
    const data = await fetch('http://localhost:5000/monitor')
    const monitor = await data.json()
    setMonitores(monitor)
  }

  const MonitorOptions = monitores.map(item => (
    {
      key: item.id,
      text: item.firstname + ' ' + item.lastname,
      value: item.id,
      image: <Icon name='chess knight' />
    }
  ));

  useEffect(() => {
    obtenerDatos()
  }, []);

  return (
    <Dropdown
      placeholder='Seleciona un monitor'
      fluid
      value={value}
      name={name}
      error={error}
      onChange={onChange}
      selection
      options={MonitorOptions}
    />
  );
}


export default Selectmonitor;