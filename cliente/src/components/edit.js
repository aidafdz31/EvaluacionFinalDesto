import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

/*const editPacientes = async ()   => {
  try {
    await axios.post(`http://localhost:3000/pacientes`)

    setPacientes(pacientes.filter(paciente =>paciente.DNI !=dni))
    
  } catch (error) {
    console.log(error)
    
  }
  
    };*/
function EditPacientes() {
  const [pacientesForm, setPacientesForm] = useState({});
  let params = useParams();
 
  //let navigate = useNavigate();
  const inputsHandler = (e) => {
    setPacientesForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = async (e) => {
    e.preventDefault();
    try {
      const respons = await axios.put(`http://localhost:3000/pacientes/${params.DNI}`, pacientesForm);
      
    } catch (error) {
      console.log(error)
      
    }
   

    }
    

    useEffect(() => {
      const fechData =async ()=>{
       try {
        const respons = await axios.get(`http://localhost:3000/pacientes/${params.DNI}`)

        console.log ( respons.data.paciente[0])
        setPacientesForm(respons.data.paciente[0])
       // setPacientes(respons.data.message)
       }
       catch(err){
         console.log(err)
   
       }
   
      }
      fechData();
     }, [params.DNI]);
      
     if (Object.keys(pacientesForm).length === 0) { return;   }//Or any other loading state representation
  return (
    
    <div>
      {pacientesForm &&
        <div className="form-wrapper">
          <h2 style={{ textAlign: 'center' }}>{pacientesForm.DNI} </h2>
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="name"
              value={pacientesForm.firstName}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">apellidos</label>
            <input
              type="text"
              className="form-control"
              name="surname"
              id="surname"
              value={pacientesForm.surname}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              name="direction"
              id="direction"
              value={pacientesForm.direction}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Localidad</label>
            <input
              type="text"
              className="form-control"
              name="localidad"
              id="localidad"
              value={pacientesForm.localidad}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">código postal</label>
            <input
              type="text"
              className="form-control"
              name="cp"
              id="cp"
              value={pacientesForm.cp}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="tel"
              className="form-control"
              name="telf"
              id="telf"
              value={pacientesForm.telf}
              onChange={inputsHandler}
            />
          </div>
          {/* {/* <div className="mb-3">
            <label className="form-label">DNI</label>
            <input
              type="text"
              className="form-control"
              name="DNI"
              id="DNI"
              value={pacientesForm.DNI}
              onChange={inputsHandler}
            /> 
          </div> */}
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div> }
    </div>
  );
}
export default EditPacientes;