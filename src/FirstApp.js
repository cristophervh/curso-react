
export const FirstApp = (props) => {

  const nuevoValor='Usuario';
  const nuevoArreglo=[1,2,3,4,5,6,7,8,9,0];
  const nuevaColeccion={
    mensaje:'Hola',
    nombre:'Usuario'
  };

  const unaFuncion=()=>{
    return 5*3;
  }

  return (
    <>
      <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Cristopher Velazquez"
      className="photo"
      />
      <h1>{1+1}</h1>

      <h1>Hola {nuevoValor}</h1>

      <h1>Arreglo: {nuevoArreglo}</h1>

      <h1>Coleccion: {JSON.stringify(nuevaColeccion)}</h1>

      <h1>Funcion: {unaFuncion()}</h1>

      {console.log(props)}

    </>
  )
}

