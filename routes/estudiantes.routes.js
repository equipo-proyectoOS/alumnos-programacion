const router =require('express').Router();
const { validarCampos } = require('../helpers/validarCampos');
const{
    rutaPost,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/estudiantes.controllers')
const {validar_jwt} = require('../middlewares/validar_jwt');
const {validacionEstudiante}= require("../middlewares/validar_estudiantes.js")
const { body, check } = require('express-validator');
//crear nuevo usuario
router.get('/estudiante',

rutaGet)

//ruta agregar usuarios
router.post('/estudiante',
 validar_jwt,
 validacionEstudiante,
validarCampos,
 rutaPost)


//ruta editar usuario
router.put('/estudiante/:id',
validar_jwt,
validacionEstudiante,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar estudiantes
router.delete('/estudiante/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar estudiantes logicamente
router.put('/estudiante/delete/:id',
validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;