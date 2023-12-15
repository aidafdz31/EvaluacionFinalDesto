import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function PacientesList(props) {
  const [pacientes, setPacientes] =useState([]);
  const deletePacientes = async (dni)   => {
    try {
      console.log(dni)
      if(dni.length > 1){ 
      await axios.delete(`http://localhost:3000/pacientes/${dni}`)

      setPacientes(pacientes.filter(paciente =>paciente.DNI !=dni))
    }
      
    } catch (error) {
      console.log(error)
      
    }
    
      };
     
  
  useEffect(() => {
   const fechData =async ()=>{
    try {
     const respons = await axios.get('http://localhost:3000/pacientes')
     console.log ( respons.data.message)
     setPacientes(respons.data.message)
    }
    catch(err){
      console.log(err)

    }

   }
   fechData();
  }, []);
  return (
    <div>





      {/* {pacientes?.map((paciente, index) => (
        <div key ={index}>
          <h2> {paciente.firstName} </h2>
           </div>
      ))} */}
       <table className="table">
       
          <tr>
            <th >nombre</th>
            <th >Apellido</th>
            <th >Dirección</th>
            <th >Localidad</th>
            <th >CP</th>
            <th >telf</th>
            <th >DNI</th>
          </tr>
      
        
          {
          pacientes.map((paciente, index) => {
            return (
              <tr key={index}>
                
                <td>{paciente.firstName}</td>
                <td>{paciente.surname}</td>
                <td>{paciente.direction}</td>
                <td>{paciente.localidad}</td>
                <td>{paciente.cp}</td>
                <td>{paciente.telf}</td>
                <td>{paciente.DNI}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={`edit/${paciente.DNI}`}>
                  
                    Edit
                  </Link>
                  
                 
                </td>
                <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deletePacientes(paciente.DNI)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      
      </table> 
    </div>
  );
}
export default PacientesList;