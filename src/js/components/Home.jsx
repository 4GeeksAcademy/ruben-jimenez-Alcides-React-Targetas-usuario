import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Formulario } from "./Formulario";

// //create your first component
// const Home = () => {
//	 const [contador,setContador] = useState(0)
// const sumaContador= ()=> setContador(contador + 1)
// const restaContador= ()=> setContador(contador + 1)
// 	return (
// 		<>
// 		<h3>{contador}</h3>
// 		<button onClick={sumaContador}>+1</button>
// 		<button onClick={restaContador}>-1</button>
// 		</>
// 	);
// };
// export default Home;

// const Home = () => {
// 	const[color, setColor] = useState('')
// 	return (
// 		<>
// 		<h3 className={`text-${color}`}>No me queda</h3>
// 		<button onClick={()=>setColor("primary")}>color1</button>
// 		<button onClick={()=>setColor("warning")}>color2</button>
// 		<button onClick={()=>setColor("success")}>color3</button>
// 		<button onClick={()=>setColor("secondary")}>color4</button>
// 		</>
// 	);
// };
// export default Home;
// const Home = () => {

// 	const[frase, setFrase] = useState(true)
// 	return (
// 		<>
// 		<h3 >{frase ? "Estoy visible" : " "}</h3>
// 		<button onClick={()=>setFrase(!frase)}>{frase ? "Ocultar": "Mostrar "}</button>
// 		</>
// 	);
// };
// export default Home;
// const Home = () => {

// 	const[input, setInput] = useState("")
// 	const[lista, setLista] = useState([])

// 	return (
// 		<>
// 		<h3 >{input}</h3>
// 		<input type="text" onChange={(event)=>setInput(event.target.value)}/>
// 		<button onClick={()=>setLista([...lista,input])}>Guardar</button>
// 		<ul>
// 			{
// 				lista.map(item=>(<li>{item}</li>))
// 			}
// 		</ul>
// 		</>
// 	);
// };
// export default Home;
const Home = () => {

	const [lista, setLista] = useState([])

	const agregarContacto = (contacto) => (
		setLista([...lista, contacto])
	)
	console.log("Lista Completa:", lista);
	return (
		<>
			<Formulario agregarContacto={agregarContacto}></Formulario>
		</>
	);
};
export default Home;