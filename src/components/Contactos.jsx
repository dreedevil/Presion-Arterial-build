import React, { useEffect, useReducer, useState } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer'
import Formularioadd from './Formularioadd'
import TablaContactos from './TablaContactos'


const Contactos = () => {

    const init = () =>{
        const contactos = localStorage.getItem("contactos")
 
        return contactos ? JSON.parse(contactos):[]
    }
//const [state, dispatch] = useReducer(ContactosReducer, [])

const [state, dispatch] = useReducer(ContactosReducer, [], init)

useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state))    
}, [state])


const [formView, setFormView] = useState(false)

    return (
        <div className="container mt-3">
        <button onClick={()=> setFormView(!formView)} className="btn btn-success"> 
        {!formView ? "+ Agregar Medición" : "- Cerrar Formulario"}
        </button>
        {
            formView && <Formularioadd dispatch={dispatch}/> 
        }
       
        <TablaContactos contactos={state} dispatch={dispatch}/>
            
        </div>
    )
}

export default Contactos
