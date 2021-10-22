const {model, Schema}= require('mongoose');


const EstudianteSchema = new Schema({
    datos_personales: {
      nombre_apellido: {
        type: String,
        required: [true, "El nombre es necesario"],
      },
      edad: {
        type: Number,
        required: [true, "La edad es necesaria"],
      },
      direccion: {
        calle: {
          type: String,
          required: [true, "La calle es necesaria"],
        },
        ciudad: {
          type: String,
          required: [true, "La ciudad es necesaria"],
        },
        codigo_postal: {
          type: Number,
          required: [true, "La ciudad es necesaria"],
        },
      },
      dni: {
        type: String,
        unique: [true, "El correo está duplicado"],
        required: [true, "El correo es necesario"],
      },
      correo: {
        type: String,
        unique: [true, "El correo está duplicado"],
        required: [true, "El correo es necesario"],
      },
      numero_telefono: [
        {
          type: String,
          unique: [true, "El número de teléfono está duplicado"],
          required: [true, "El número de teléfono es necesario"],
        },
      ],
      genero: { type: Number, min: 0, max: 2 },
      nacionalidad: {
          type: String,
          required: true,
        
      },
    },
    secundario: {
      institucion: {
        type: String,
        required: true,
      },
      titulo: {
        type: String,
        required: true,
      },
    },
    conocimientos_informaticos: [Boolean]
  });

module.exports = model('Estudiante', EstudianteSchema);
/*const UserShema = new Schema({
    email:{
        type: String,
        require:true
    },
    password:{
        type: String,
        require:true
    }
    

});
*/