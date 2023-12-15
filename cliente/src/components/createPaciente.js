import React, { useEffect, useState } from "react";
import axios from "axios";
function CreatePaciente() {
  const [mostrar, setMostrar] = useState(false)
  const [pacientesForm, setPacientesForm] = useState({
firstName: "",
    surname: "",
    direction: "",
    localidad:"",
    cp:"",
    telf:"",
    DNI:""
  });
  /*useEffect(() => {
    console.log("Loading...");
    const fechData = async(firstName,surname,direction,localidad,cp,telf,DNI) => {
      try {
       const {dataata} = await axios.post('http://localhost:3000/pacientes',
       {
        firstName,
        surname,
        direction,
        localidad,
        cp,
        telf,
        DNI

       }
       );
    }catch(err){
        console.log(err)
  
      }
  
     };
     fechData();
    }, []);*/
  const inputsHandler = (e) => {
    setPacientesForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    
    e.preventDefault();
    try {

     const response = await axios.post('http://localhost:3000/pacientes', pacientesForm);
     console.log(response)
     if(response.data.message  =='ok' ) {
      setMostrar(true)

     }else {
      setMostrar(false)
     }
      
    } catch (error) {
      console.log(error)
    }
    console.log(pacientesForm);
     }
    
  

   
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
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
            <label className="form-label">Apellidos</label>
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
            <label className="form-label">direction.</label>
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
            <label className="form-label">cp</label>
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
            <label className="form-label">telf</label>
            <input
              type="tel"
              className="form-control"
              name="telf"
              id="telf"
              value={pacientesForm.telf}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">DNI</label>
            <input
              type="text"
              className="form-control"
              name="DNI"
              id="direction"
              required
              value={pacientesForm.DNI}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        
      </div>{mostrar && <h2 className="apto">Tu formulario fue creado correctamete</h2> }
      
    </div>
  );
} 
export default CreatePaciente;