const router =require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt');


const{
    rutaPost,rutaLogin,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/user.controllers')


//RUTA LOGIN
router.post('/auth/login', rutaLogin)



//crear nuevo usuario
router.get('/api/get-user',rutaGet)

//ruta agregar usuarios
router.post('/registro',rutaPost)


//ruta editar usuario
router.put('/api/edit-user/:id',validar_jwt,rutaPut)


//ruta eliminar usuarios
router.delete('/api/delete-user/:id',validar_jwt,rutaDelete)


//eliminar usuario logicamente
router.put('/api/delete-user-logical/:id',validar_jwt,rutaLogicalDelete)


module.exports =router;