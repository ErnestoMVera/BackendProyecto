const express = require("express");
const router = express.Router();
const control = require("../controladores/controlador");
router.get('/arrendatarios', (req, res) => control.getArrendatarios(req, res));
module.exports = router;
