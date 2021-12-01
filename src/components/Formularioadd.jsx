import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

const Formularioadd = ({dispatch}) => {

    const [data,setData]=useState({sistolica:"", diastolica:"", fecha:"", toma:""})

    const {sistolica, diastolica, fecha, toma} = data

    const handleChange = (e) =>{
       setData({...data,[e.target.name]:e.target.value})
   
     }

    const actionAdd = {
        type:"add",
        payload:{
            id: uuid(),
            fecha,
            toma,
            sistolica,
            diastolica
        }
       
    }
    
    const handleAdd = (e) => {
        e.preventDefault()
         dispatch(actionAdd)
    }
    return (
        <>

        <div className="container">
        <form id="formulario">
        <label className="mx-1 d-grid gap-2">
            Sistólica: {" "} 
            <input onChange={handleChange} id="sistolica" name="sistolica" value={sistolica} type="number" className="form-control" autoComplete="off" />
        </label>
        <label className="mx-1 d-grid gap-2">
            Diastólica: {" "} 
            <input onChange={handleChange} id="diastolica" name="diastolica" type="number" value={diastolica} className="form-control" autoComplete="off" />
        </label>
        <label className="mx-1 d-grid gap-2">
            <select onChange={handleChange} class="form-select" aria-label="Default select example" id="toma" name="toma">
            <option selected>Selecciona la toma:</option>
            <option value="MAÑANA">Mañana</option>
            <option value="TARDE">Tarde</option>
            <option value="NOCHE">Noche</option>
            </select>
           
        </label>
        <label className="mx-1 d-grid gap-2">
            Fecha: {" "} 
            <input onChange={handleChange} id="fecha" name="fecha" type="date" value={fecha} className="form-control" autoComplete="off" />
        </label>
          <div className="mx-1 d-grid gap-2">
              <button onClick={handleAdd} className="btn btn-info mt-2">Agregar</button>
          </div>
          </form> 
        </div>
        </>
    )
}

export default Formularioadd
