import React, { useState } from "react";


export const Formulario = ({agregarContacto}) => {


    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [password, setPassword] = useState("")

    // const [lista, setLista]= useState([])


    const handleSubmit = (crear) => {
        crear.preventDefault();
        if(email===""|| telefono==="" || password=== "") return
        const nuevoRegistro = { email, telefono, password }
        agregarContacto(nuevoRegistro)
        

        // console.log("Guardado ✅:",nuevoRegistro);
        setEmail("");
        setTelefono("");
        setPassword("");
    };
   

    return (
        <>
            <form id="formulario" onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="Form-label">Email address</label>
                    <input className="Form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        type="email"
                        value={email}
                        onChange= {(loEscrito) => setEmail(loEscrito.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleNumber1" className="Form-label" >Telefono</label>
                    <input className="Form-control" id="exampleNumber1"
                        type="telefono"
                        value={telefono}
                        onChange={loEscrito => setTelefono(loEscrito.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="Form-label" >Password</label>
                    <input  className="Form-control" id="exampleInputPassword1"
                        type="password"
                        value={password}
                        onChange={loEscrito => setPassword(loEscrito.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" >Crear </button>
            </form>
        </>

    )
}