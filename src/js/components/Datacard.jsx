export const DataCard = ({ lista }) => {

    return (
        <>
            <div className="d-flex flex-wrap gap-3">
                {lista.map((contacto, index) => (
                    <div className="card d-flex flex-wrap gap-3" style={{ width: "18rem" }} key={index}>

                        <div className="card-body" >

                            <h5 className="card-title">Email: {contacto.email}</h5>
                            <h5 className="card-title">Telefono: {contacto.telefono}</h5>
                            <h5 className="card-title">Password: {contacto.password}</h5>

                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}