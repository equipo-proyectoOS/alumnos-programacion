const router =require('express').Router();
const {validar_jwt} = require('../middlewares/validar_jwt');
const { validarCampos } = require('../helpers/validarCampos');
const { body, check } = require('express-validator');

const{
    rutaPost,rutaLogin,rutaDelete,rutaGet, rutaPut, rutaLogicalDelete
}=  require('../controllers/user.controllers')
const { ExisteEmail } = require('../middlewares/validar_email');

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

[

 body('nombre_usuario', 'El username ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),


body('email', 'el correo ingresado no contiene un formato correcto')
    .isEmail()
    .not()
    .isEmpty()
    .custom(ExisteEmail),

 body('password', 'El password ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),
validarCampos,

],

rutaGet)

//ruta agregar usuarios
router.post('/registro',

   
[
    
    body('nombre_usuario', 'El username ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    body('email', 'el correo ingresado no contiene un formato correcto')
        .isEmail()
        .not()
        .isEmpty()
        .custom(ExisteEmail),
    
     body('password', 'El password ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
   
    validarCampos,
],

rutaPost)


//ruta editar usuario
router.put('/api/edit-user/:id',
validar_jwt,

[
    body('nombre_usuario', 'El username ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    
    body('email', 'el correo ingresado no contiene un formato correcto')
        .isEmail()
        .not()
        .isEmpty()
        .custom(ExisteEmail),

     body('password', 'El password ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    validarCampos,
]

,rutaPut)


//ruta eliminar usuarios
router.delete('/api/delete-user/:id',
validar_jwt,

[
body('nombre_usuario', 'El username ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),


body('email', 'el correo ingresado no contiene un formato correcto')
    .isEmail()
    .not()
    .isEmpty()
    .custom(ExisteEmail),
 body('password', 'El password ingresado no contiene un formato correcto')
.isString()
.not()
.isEmpty(),
validarCampos,
],

rutaDelete)


//eliminar usuario logicamente
router.put('/api/delete-user-logical/:id',

validar_jwt,

[
    body('nombre_usuario', 'El username ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    
    body('email', 'el correo ingresado no contiene un formato correcto')
        .isEmail()
        .not()
        .isEmpty(),
    
     body('password', 'El password ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
    .custom(ExisteEmail),
    validarCampos,
]

,rutaLogicalDelete)


module.exports =router;