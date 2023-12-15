import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Menu() {
 return (
 <nav>
 <div>Franquicias Dental Time</div>
 <div>
 <NavLink to="/" className={({isActive}) => isActive ?
 "active" : ""}>
 Inicio
 </NavLink>
 <NavLink to="/pacientes" className={({isActive}) => isActive ?
 "active" : ""}>
 Lista
 </NavLink>
 
 <NavLink to="/create" className={({isActive}) => isActive ?
 "active" : ""}>
 Crear
 </NavLink>
 <NavLink to="/search" className={({isActive}) => isActive ?
 "active" : ""}>
 Buscar
 </NavLink>
 <NavLink to="/log" className={({isActive}) => isActive ?
 "active" : ""}>
 Log
 </NavLink>
 </div>
 </nav>
 )
}