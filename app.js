const express = require("express");
const cors = require('cors');
const axios = require('axios');
const propiedades_route = require("./router/propiedades");
const propietarios_route = require("./router/propietarios");
const arrendatarios_route = require("./router/arrendatarios")
const app = express();
const fs = require("fs")
const https = require("https")
const port = 3000;
process.env.port = 3000;
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
const privateKey = fs.readFileSync("./ssl/private.key");
const certificate = fs.readFileSync("./ssl/certificate.crt");
const credenciales = {
	key: privateKey,
	cert: certificate,
	passphrase: "password"
}
const httpsServer = https.createServer(credenciales, app);
httpsServer.listen(process.env.port, () => {
	console.log(`servidor escuchando en puerto ${process.env.port}`);
}).on('error', err => {
	console.log("Error al iniciar el server: ", err);
});
app.listen(port, () => {
	console.log("Servidor iniciado");
});

