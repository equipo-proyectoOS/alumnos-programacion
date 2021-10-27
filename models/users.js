const {model, Schema}= require('mongoose');

const UserShema = new Schema({
    nombre_usuario:{
        type:String,
        required:true
    },
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    },
    activo:{
        type: Boolean,
        default: true
    },
    rol:{
        type: String,
        default: "admin"
    }

});

module.exports = model('User', UserShema);