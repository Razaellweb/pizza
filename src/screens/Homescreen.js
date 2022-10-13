import React from "react";
import pizzas from "../pizzadata";
import Pizza from "../components/pizza";

const Homescreen = () => {
    return(
        <div>
            <center>
           <div className="row">
               {pizzas.map((pizza) => {
                   return (
                       <div className="col-md-4 p-3">
                           <div>
                               <Pizza pizza={pizza} />
                           </div>
                       </div>
                   )
               })}
           </div>
           </center>
        </div>
    )
}

export default Homescreen;