const express = require("express");
const router = express.Router();
const control = require("../controladores/controlador");
router.get('/propiedades', (req, res) => control.getPropiedad(req, res));
router.post('/propiedades', (req, res) => control.crearPropiedad(req, res));
router.delete('/propiedades', (req, res) => control.deletePropiedad(req, res));
router.put('/propiedades', (req, res) => control.putPropiedad(req, res));
module.exports = router;
