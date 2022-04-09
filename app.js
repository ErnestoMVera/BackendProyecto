const express = require("express");
const cors = require('cors');
const axios = require('axios');
const propiedades_route = require("./router/propiedades");
const propietarios_route = require("./router/propietarios");
const arrendatarios_route = require("./router/arrendatarios")
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(propiedades_route);
app.use(propietarios_route);
app.use(arrendatarios_route);
app.get('/', (req, res) => {
	res.send("BIENVENIDO A MI BAKEN");
	
});
app.post('/', (req, res) => {
	res.send(req.body);
});
app.listen(port, () => {
	console.log("Servidor iniciado");
});
