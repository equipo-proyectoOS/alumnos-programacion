const ctrlUser = {};
const User = require('../models/users');
const {generate_jwt} = require('../helpers/generar_jwt');

ctrlUser.rutaGet = async (req,res)=>{

    const usuario = await User.find();

    res.json(usuario);
};

//Login de usuarios
ctrlUser.rutaLogin = async (req, res) => {

    const { email, password} = req.body;

    const usuario = await User.findOne({email, password});
   
   
    //Si no encuentra el usuario
    if(!usuario){
        return res.status(401).json({
            msg: "Usuario no existe"
        })
    };

    //verificamos si es un usuario activo
    
    if(!usuario.activo){
        res.status(401).json({
            //Si no lo encuentra activo al usuario pasa
            msg: "Usuario no existe"
        })
    }

    //Si lo encuentra

    const token = await generate_jwt(usuario.id); 
    
    //Muestra el token generado
    res.json({
        token     
    }); 
}




//agrega el usuario

ctrlUser.rutaPost = async (req,res)=>{
     
    const {nombre_usuario,email,password} = req.body;
    
    const usuario = new User({nombre_usuario,email,password})

    await usuario.save();
    res.json({msg: 'user agregado'})
};



//edita el usuario

ctrlUser.rutaPut = async (req , res)=>{

    const { id } = req.params;
    let {nombre_usuario, email, password, ...restoDeDatos}= req.body


  

    try {
        const usuario = await User.findByIdAndUpdate(id, {nombre_usuario, email, password});
        return res.json(usuario)
    } catch (error) {
        console.log(`Error to update user: ${error}`)
    }

};





ctrlUser.rutaDelete = async (req,res)=>{
    const {id}= req.body;

    try{
        await User.findByIdAndDelete(req.params.id);

        return res.json({msg: 'user removed'})
    } catch(error){
        console.log('error al eliminar user ',error)
    }
};



// eliminacion logica
ctrlUser.rutaLogicalDelete= async (req, res)=>{

    const {id} = req.body;

    const usuario =await User.findByIdAndUpdate(id,{ activo: false }, {new: true });

    
    //responde si fue eliminado correctamente

    res.json({msg:`Usuario eliminado logicamente`}, usuario)
}

module.exports = ctrlUser;

