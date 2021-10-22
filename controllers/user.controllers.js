const ctrlHome = {};
const { distinct } = require('../models/alumno');
const Estudiante = require('../models/alumno');




//ruta get users 
 
ctrlHome.rutaGet = async (req,res)=>{

    const alumno = await Estudiante.find();

    res.json(alumno);
}

//ruta agregar users

ctrlHome.rutaPost = async (req,res)=>{
     
    const {datos_personales:{nombre_apellido, edad,direccion:{calle,ciudad,codigo_postal},dni,correo,numero_telefono,genero,nacionalidad},secundario:{institucion,titulo},conocimientos_informaticos} = req.body;
    
    const alumno = new Estudiante({datos_personales:{nombre_apellido, edad,direccion:{calle,ciudad,codigo_postal},dni,correo,numero_telefono,genero,nacionalidad},secundario:{institucion,titulo},conocimientos_informaticos})

    await alumno.save();
    res.json({msg: 'alum agregado'})
};

//ruta eliminar users
ctrlHome.rutaDelete = async (req,res)=>{
    const {id}= req.body;

    try{
        await Estudiante.findByIdAndDelete(req.params.id);

        return res.json({msg: 'user removed'})
    } catch(error){
        console.log('error al eliminar user ',error)
    }
}



//ruta editar users
ctrlHome.rutaPut = async (req , res)=>{

    const { id } = req.params;
    let {datos_personales:{nombre_apellido, edad,direccion:{calle,ciudad,codigo_postal},dni,correo,numero_telefono,genero,nacionalidad},secundario:{institucion,titulo},conocimientos_informaticos}= req.body


  

    try {
        const alumno = await Estudiante.findByIdAndUpdate(id, {datos_personales:{nombre_apellido, edad,direccion:{calle,ciudad,codigo_postal},dni,correo,numero_telefono,genero,nacionalidad},secundario:{institucion,titulo},conocimientos_informaticos});
        return res.json(alumno)
    } catch (error) {
        console.log(`Error to update user: ${error}`)
    }

};


module.exports = ctrlHome;
