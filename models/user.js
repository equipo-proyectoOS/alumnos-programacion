const {model, Schema}= require('mongoose');

const UserShema = new Schema({
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    }
    

});

module.exports = model('Usuario', UserShema);