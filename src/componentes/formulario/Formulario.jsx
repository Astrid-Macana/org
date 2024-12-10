
import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campotexto/Campo.jsx"
import ListaOpcines from "../listaopciones/Listaopciones"
import Boton from "../boton/boton"

const Formulario = (props) =>{
    
     const [nombre,actualizarNombre]= useState("");
     const [puesto,actualizarPuesto]= useState("");
     const [foto,actualizarFoto]= useState("");
     const [equipo,actualizandoEquipo]=useState("")

    const  [titulo,actualizarTitulo ] = useState("");
    const  [color,actualizarColor] = useState("")


    const {registrarColaborador,crearEquipo}= props



    const manejatEvento= (e)=> {
        e.preventDefault()
        console.log("manejar el envio",)
        let datosAEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto:foto,
            equipo :equipo
        }
        registrarColaborador(datosAEnviar)
    }     
     
    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo,colorPrimario : color })
    } 

    return <section className="formulario"> 

    <form onSubmit={manejatEvento}> 
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
            titulo ="Nombre" 
            placeholder ="Ingresar nombre " 
            required
            valor={nombre}
            actualizarValor= {actualizarNombre}
            />
        <Campo
            titulo ="Puesto" 
            placeholder ="Ingresar puesto " 
            required
            valor={puesto}
            actualizarValor= {actualizarPuesto}
        
        /> 
        <Campo
            titulo ="Foto" 
            placeholder ="Ingresar enlace de foto " 
            required 
            valor={foto}
            actualizarValor= {actualizarFoto}
        />
        <ListaOpcines
        valor={equipo}
        actualizandoEquipo = {actualizandoEquipo}
        equipos = {props.equipos}
        />
        <Boton texto="Crear"/>
    </form>



    <form onSubmit={manejarNuevoEquipo}> 
        <h2>Rellena el formulario para crear el Equipo.</h2>
        <Campo
            titulo ="Titulo" 
            placeholder ="Ingresar titulo " 
            required
            valor={titulo}
            actualizarValor= {actualizarTitulo}
            />
        <Campo 
            titulo ="color" 
            placeholder ="Ingresar color" 
            required
            valor={color}
            actualizarValor= {actualizarColor}
            type="color"
        
        /> 
            <Boton texto="Registrar equipo"/>

        </form>
 </section> 
}
export default Formulario