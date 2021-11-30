import React from 'react'

const TablaContactos = ({contactos= [], dispatch}) => {
  const handleDelete= (id) => {
    const deleteAction = {
      type: "delete",
      payload: id
    }
    dispatch(deleteAction)
  }
    return (
        <div>
           <table className="table">
  <thead>
    <tr>
      
      <th scope="col">Fecha</th>
      <th scope="col">Toma</th>
      <th scope="col">Sistólica</th>
      <th scope="col">Diastólica</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    {
        contactos.map((contacto)=>{
         // const fianlId = contacto.id.split("-")
            return <tr key={contacto.id}>
            
            
            <td>{contacto.fecha}</td>
            <td>{contacto.toma}</td>
            <td>{contacto.sistolica}</td>
            <td>{contacto.diastolica}</td>
            <td>
            <button onClick={()=>handleDelete(contacto.id)} className="btn btn-danger">Borrar</button>
            </td>
            </tr>
        })
    }
  </tbody>
</table>
        </div>
    )
}

export default TablaContactos
