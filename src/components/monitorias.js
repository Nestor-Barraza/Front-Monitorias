import React, {useEffect, useState} from 'react';
import Formmonitorias from './formMonitorias';
import editMonitorias from './editMonitoria';





function Monitorias(){
  const [monitorias, setMonitorias] = useState([]);

  useEffect(() => {
    obtenerDatos2()
  }, [])

  const obtenerDatos2 = async () => {
    const data = await fetch('http://localhost:5000/monitorias')
    const monitoria = await data.json()
    setMonitorias(monitoria)
  }

 
  

  return (
   
    
    <div class="ui container center aligned">
    <table class="ui collapsing table ">
  <thead>
  <h1>Monitorias</h1>
    <tr>
      <th>Asignatura</th>
      <th>Monitor Asignado</th>
      <th>Fecha</th>
      <th>Salón</th>
      <th>Acciones</th>
      
      
    </tr>
  </thead>
  <tbody> { monitorias.map(item => (
    <tr>
      <td key={item.id}>{item.class}</td>
      <td key={item.id}>{item.monitor.firstname + " " +item.monitor.lastname}</td>
      <td key={item.id}>{item.date}</td>
      <td key={item.id}>{item.classroom}</td>
      
      <td key={item.id}>
      <div class="ui large buttons">
      <editMonitorias/>
<button class="ui button"><i class="edit outline icon"></i></button>
<div class="or"></div>
<button class="ui button" onClick={item.id}><i class="user times icon"></i></button>
</div>
      </td>
    </tr>
      ))
      } 
      </tbody>
  <tfoot >
  <td></td>
  <td></td>
  <td></td>
  <td></td>
  <td>
  <Formmonitorias refresh={obtenerDatos2}/>
  </td>

 
  <tr></tr>





  
    </tfoot>
</table>



    
  </div>
 
  );

}

  export default Monitorias;