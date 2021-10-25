const router =require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt');

const{
    rutaPost,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/estudiantes.controllers')


//crear nuevo usuario
router.get('/api/get-estudiantes',
validar_jwt,
rutaGet)

//ruta agregar usuarios
router.post('/api/create-estudiantes',
 validar_jwt,
 rutaPost)


//ruta editar usuario
router.put('/api/edit-estudiantes/:id',
validar_jwt,
rutaPut)


//ruta eliminar usuarios
router.delete('/api/delete-estudiantes/:id',
validar_jwt,
rutaDelete)


//eliminar usuario logicamente
//router.put('/api/delete-estudiantes-logical/:id',
//validar_jwt,
//rutaLogicalDelete)


module.exports =router;