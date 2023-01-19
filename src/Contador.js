import { useState } from 'react'
import PropTypes from 'prop-types'

export const Contador=()=>{

    const [valor,setCounter] =useState(0);

    /*
function handleAdd(event, nuevoValor){
    console.log(event);
    console.log(nuevoValor);
    valor=1000;
}
*/

const handleAdd=()=>{
    setCounter(valor+1)
}

const handleSubs=()=>{
    setCounter(valor-1)
}

const handleReset=()=>{
    setCounter(0)
}

    return(
        <>
        <h1>Valor: {valor}</h1>

        <button onClick={(event) => handleAdd()} >
            +1
        </button>

        <button onClick={(event) => handleSubs()} >
            -1
        </button>

        <button onClick={(event) => handleReset()} >
            Reset
        </button>

        </>
    )
}

Contador.propTypes={
    valor:PropTypes.number.isRequired
}