import "../listaopciones/Listaopciones.css";

const ListaOpcines = (props) =>{
    
    //metodo ,ap -> arreglo.map(()=>{
        //
        //})
    

    const manejoCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizandoEquipo (e.target.value)
    }
    return <div className="lista-opciones">
        <label >
            Equipos
        </label>
        <select value={props.valor} onChange={manejoCambio}>
            <option value= "" disabled defaultValue="" hidden>Selecionar equipo </option>
            {props.equipos.map((equipo,index) =>
                 <option key={index} value={equipo}>{equipo}  </option>
            )}
            
        </select>
    </div>
} 
export default ListaOpcines