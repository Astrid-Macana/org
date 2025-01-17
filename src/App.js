import { useState } from 'react';
import{v4 as uuid} from "uuid"
import './App.css';
import Header from './componentes/Heder/Header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/miOrg/miOrg';
import Equipo from './componentes/Equipo/equipo';
import Footer from './componentes/footer/footer';


function App() {

  const [mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaborador]= useState([{
    id:uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id:uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id:uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }])
  
  const [equipos,actualizarEquipos]= useState([
    {
      id:uuid(),
      titulo:"Programacion",
      colorPrimario: "#57C278 ",
      colorSecundario: "#D9F7E9"

    },

    {
      id:uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA ",
      colorSecundario: "#E8F8FF"

    },

    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157 ",
      colorSecundario: "#F0F8E2F"

    },

    {
      id:uuid(),
      titulo:  "Devops",
      colorPrimario: "#E06B69 ",
      colorSecundario: "#FDE7E8"

    },

    {
      id:uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"

    },

    {
      id:uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"

    },

    {
      id:uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"

    },
  ]);


  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  // Registrar colaboradores

  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo colaborador",colaborador)
    actualizarColaborador([...colaboradores , colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador= (id) => {
    console.log("Eliminar colaborador",id)
    const nuevosColaboradores = colaboradores.filter((colaborador ) => colaborador.id !== id)
   actualizarColaborador(nuevosColaboradores)
  }

  //actualizar color

  const actualizarColor= (color, id) =>{
      console.log("Actualizar:",color,id)
      const equiposActualizados = equipos.map((equipo)=>{
          if (equipo.id === id) {
            equipo.colorPrimario = color
          }
         return equipo 
      })
     actualizarEquipos(equiposActualizados)
    }

   // Crear equipo
    const crearEquipo = (nuevoEquipo) => {
      console.log(nuevoEquipo)
      actualizarEquipos([...equipos, {...nuevoEquipo,id:uuid()}])
    }

    //like
    const like= (id) => {
  
      console.log("like",id)
      const colaboladoresActualizados =  colaboradores.map((colaborador)=>{
        if (colaborador.id === id) {
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })
      actualizarColaborador(colaboladoresActualizados)
    }


  return (
    <div className="App">
      <Header/>
        { 
            
            mostrarFormulario &&  <Formulario 
            equipos={equipos.map((equipo)=> equipo.titulo)}
            registrarColaborador= {registrarColaborador}
            crearEquipo = {crearEquipo}
        
        /> 
        }
     
        <MiOrg cambiarMostrar ={cambiarMostrar} />
        {
            equipos.map((equipo)=> <Equipo 
            datos={equipo} 
            key={equipo.titulo}
            colaboradores = {colaboradores.filter(colaborador =>colaborador.equipo === equipo.titulo)}
            eliminarColaborador = {eliminarColaborador}
            actualizarColor ={actualizarColor}
            like={like}
            
        />
          )
        }
      

      <Footer/>
    </div>
  );
}

export default App;
