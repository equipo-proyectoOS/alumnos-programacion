const router =require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt');

const{
    rutaPost,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/estudiantes.controllers')


//crear nuevo usuario
router.get('/estudiante',
validar_jwt,
rutaGet)

//ruta agregar usuarios
router.post('/estudiante',
 validar_jwt,
 rutaPost)


//ruta editar usuario
router.put('/estudiante/:id',
validar_jwt,
rutaPut)


//ruta eliminar usuarios
router.delete('/estudiante/:id',
validar_jwt,
rutaDelete)


//eliminar usuario logicamente
router.put('/estudiante/delete/:id',
validar_jwt,
rutaLogicalDelete)


module.exports =router;