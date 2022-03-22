const express = require("express");
const router = express.Router();
const control = require("../controladores/controlador");
router.get('/propietarios', (req, res) => control.getPropietarios(req, res));
router.post('/propietarios', (req, res) => control.crearPropietario(req, res));
router.delete('/propietarios', (req, res) => control.deletePropietario(req, res));
router.put('/propietarios', (req, res) => control.putPropietario(req, res));
module.exports = router;
