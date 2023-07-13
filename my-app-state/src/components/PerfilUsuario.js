import React from "react";
import "../styles/Boton.css";
const PerfilUsuario = (props) => {
	const [edad, setEdad] = React.useState(props.edad);

	const changeEdad = () => {
		setEdad(50);
	};

	return (
		<div>
			<h3>Perfil del usuario</h3>
			<p>{props.Nombre}</p>
			<p>{edad}</p>
			<p>{props.img}</p>
			<br></br>
			<button className="btnElegant" onClick={changeEdad}>
				Button
			</button>
		</div>
	);
};

export default PerfilUsuario;
