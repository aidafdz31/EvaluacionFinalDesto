import queryString from 'query-string'
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from '../hooks/useFrom';
import axios from 'axios';
import { useState } from 'react';

export const Buscar = () => {
  const [pacientes, setPacientes] =useState({});
 

    const navigate = useNavigate();
    const location = useLocation();
    const query = queryString.parse (location.search);
    const {q=''} = query;//estructurA EL VALOR Q DE QUERY PARA USAR

    const {searchText,onInputChange} = useForm ({ searchText: q });
    const searchDni= async (e) => {
      e.preventDefault();
      console.log(searchText)
      navigate(`?q=${searchText.trim()}`)
      //navigate(`?q=name`)
      //console.log('Entre al formulario')
      try {
        const respons = await axios.get(`http://localhost:3000/pacientes/${searchText.trim()}`)

        console.log ( respons.data.paciente[0])
       setPacientes(respons.data.paciente[0])
       // setPacientes(respons.data.message)
       }
       catch(err){
         console.log(err)
   
       }
 

    }
   
    //console.log(query)

   
    return(
        <div>
      <form  onSubmit={searchDni}>
          <div >
            <label className="form-label">Buscar por DNI</label>
            <input
              type="text"
              className="searchText"
              name="searchText"
              id="text"
              value= {searchText}
              onChange={onInputChange}
            />
          </div>
          
            <div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
        </div>
        </form>
        <div className='card'>

        
       <h2>{pacientes && pacientes.firstName}  </h2>
       <h2>{pacientes && pacientes.surname}  </h2> 
       <h2>{pacientes && pacientes.direction}  </h2> 
       <h2>{pacientes && pacientes.localidad}  </h2>
       <h2>{pacientes && pacientes.cp}  </h2> 
       <h2>{pacientes && pacientes.telf}  </h2> 
       <h2>{pacientes && pacientes.DNI}  </h2> 
       </div>   
       {/* //si existe renderiza si no no */}
 {!pacientes && <h2>No se encuentra ningun paciente con este dni</h2>}
        </div>

    )

}

    