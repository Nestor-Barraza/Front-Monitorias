import React, {useEffect, useState} from 'react';
import Formmonitores from './formMonitores';

const  Monitores = () => {
  const [monitores, setMonitores] = useState([]);

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch('http://localhost:5000/monitor')
    const monitor = await data.json()
    setMonitores(monitor)
  }


  return (
    <div>
      <h1>Monitores</h1>
      <table class="ui collapsing table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>apellido</th>
        <th>Programa</th>
        <th>Semestre</th>
        <th>Cédula</th> 
        <th>Celular</th> 
        <th>Email</th> 
        <th>Cumpleaños</th> 
        <th>Dirección</th> 
        <th>Teléfono</th> 
        <th>Acción</th> 
      </tr>
    </thead>
    <tbody> { monitores.map(item => (
      <tr>
        <td key={item.id}>{item.firstname}</td>
        <td key={item.id}>{item.lastname}</td>
        <td key={item.id}>{item.program}</td>
        <td key={item.id}>{item.semester}</td>
        <td key={item.id}>{item.documentnumber}</td>
        <td key={item.id}>{item.phone}</td>
        <td key={item.id}>{item.email}</td>
        <td key={item.id}>{item.birthday}</td>
        <td key={item.id}>{item.address}</td>
        <td key={item.id}>{item.homenumber}</td>
        <td key={item.id}>
        <div class="ui large buttons">
  <button class="ui button"><i class="edit outline icon"></i></button>
  <div class="or"></div>
  <button class="ui button"><i class="user times icon"></i></button>
</div>
        </td>
      </tr>
        ))
        } 
        </tbody>
    <tfoot>
    <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th> 
        <th></th> 
        <th></th> 
        <th></th> 
        <th></th> 
        <th></th> 
        <th><Formmonitores refresh={obtenerDatos}/></th> 
    
    
      </tfoot>
  </table>



      
    </div>
  );

}

  export default Monitores;