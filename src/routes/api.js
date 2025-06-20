const express = require("express");

const router = express.Router();

const { 
  getServices, 
  getServiceById 
} = require('../controllers/servicesController');

router.get('/', getServices);
router.get('/:id', getServiceById);

module.exports = router;