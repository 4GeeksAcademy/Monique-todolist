import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const List = () => {
    const [entrada,setEntrada] = useState("");
    const [cantidad, setCantidad] = useState([]);

    function agregarItem (e) {
      if (e.key === "Enter"){
        if (entrada.trim() !== "") {
          setCantidad(cantidad.concat(entrada));
          }}
  };

  function eliminarItem(index) {
    const nuevaLista = cantidad.filter((_,i) =>i !==index);
    setCantidad(nuevaLista);
  };

  return(
      <div className="container" >
           <h1>todos</h1>
          <div className="listas">
               <ul>
                  <li>
                     <input type="text" value={entrada} onChange={(e) =>setEntrada(e.target.value)} onKeyDown={agregarItem} placeholder="What needs to be done?"></input>
                   </li>
                  {cantidad.map((item, index) => (
                    <li key={index} className="task-item">
                      {item}{" "}
                      <FontAwesomeIcon icon={faXmark} onClick={() => eliminarItem(index)} className="delete-icon" />
                  </li> 
                  ))}
                </ul>
                <div className="footer">{cantidad.length} item left </div>
          </div>
             <div className="hoja1"></div> 
             <div className="hoja2"></div>             
      </div>
        
    );
};

export default List