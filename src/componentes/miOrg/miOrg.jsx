// import { useState } from "react"
import "./miOrg.css"

const MiOrg = (props) => {
    //const [nomvariablr,fuction]=useState(valorInicial) 
    

    
    // const manejarClick= () =>{
    //     console.log("Mostrar/ ocultarc elemento")
    
    return <section className="orgSection">
        <h3 className="title"> Mi organización</h3>
            <img src="/img/Botao.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg