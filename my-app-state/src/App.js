import React from "react";
import "./App.css";
import PerfilUsuario from "./components/PerfilUsuario";

function App() {
	const Nombre = "Alejandro";
	const edad = 13;
	const url = "google.com";

	return (
		<div className="App">
			<PerfilUsuario Nombre={Nombre} edad={edad} img={url} />
		</div>
	);
}

export default App;
