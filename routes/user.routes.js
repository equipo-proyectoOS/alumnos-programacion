const router =require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt');


const{
    rutaPost,rutaLogin,rutaDelete,rutaGet, rutaPut, /*rutaLogicalDelete*/
}=  require('../controllers/user.controllers')


//RUTA LOGIN
router.post('/api/login-user', rutaLogin)



//crear nuevo usuario
router.get('/api/get-user',rutaGet)

//ruta agregar usuarios
router.post('/api/create-user',rutaPost)


//ruta editar usuario
router.put('/api/edit-user/:id',rutaPut)


//ruta eliminar usuarios
router.delete('/api/delete-user/:id',rutaDelete)


//eliminar usuario logicamente
//router.put('/api/delete-user-logical/:id',rutaLogicalDelete)


module.exports =router;