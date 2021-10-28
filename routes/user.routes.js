const router =require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt');
const { validarCampos } = require('../helpers/validarCampos');
const { body, check } = require('express-validator');

const{
    rutaPost,rutaLogin,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/user.controllers')
const { validarUser } = require('../middlewares/validar_user');

//RUTA LOGIN
router.post('/auth/login', 

[
    body('email', 'el correo ingresado no contiene un formato correcto')
    .isEmail()
    .not()
    .isEmpty(),

    body('password', 'El password ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    validarCampos,
],

rutaLogin)



//crear nuevo usuario
router.get('/api/get-user',

validarUser,
validarCampos,
rutaGet)

//ruta agregar usuarios
router.post('/registro',

validarUser,
validarCampos,
rutaPost)


//ruta editar usuario
router.put('/api/edit-user/:id',

validar_jwt,
validarUser,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaPut)


//ruta eliminar usuarios
router.delete('/api/delete-user/:id',

validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaDelete)


//eliminar usuario logicamente
router.put('/api/delete-user-logical/:id',

validar_jwt,
check('id','No es un id de MongoDB válido').isMongoId(),
validarCampos,
rutaLogicalDelete)


module.exports =router;