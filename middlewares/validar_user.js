const { body, check } = require('express-validator');
const { ExisteEmail } = require('../middlewares/validar_email');
const validarUser=

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
    .isEmpty()

]

module.exports = {
    validarUser
}